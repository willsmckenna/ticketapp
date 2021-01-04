import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';
import request from 'supertest';
import jwt from 'jsonwebtoken';

declare global {
    namespace NodeJS {
        interface Global{
            signin(id?: string): string[];
        }
    }
}
let mongo: any;

jest.mock('../nats-wrapper');
process.env.STRIPE_KEY = 'sk_test_51I5a9BAwGC8FxGrKEhNjPKgx1WRM6KOZtMjxasEcXtypc78Z4K8Ex8GjdHjk2maf859QhYRZ9lXW541IgPgBZSu700UeeqLWto';

beforeAll(async () => {
    process.env.JWT_KEY = 'asdfdsa';
    
    mongo = new MongoMemoryServer();
    const mongoUri = await mongo.getUri();

    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

beforeEach(async () => {
    jest.clearAllMocks();
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections){
        await collection.deleteMany({});
    }
});

afterAll(async () => {
    await mongo.stop();
    await mongoose.connection.close();
});

global.signin = (id?: string) => {
    // Build a JWT payload. { id, email }
    const payload = {
        id: id || new mongoose.Types.ObjectId().toHexString(),
        email: 'test@test.com'
    };
    // Create the JWT! 
    const token = jwt.sign(payload, process.env.JWT_KEY!);
    //Build session Object. { jwt: MY_JWT }
    const session = { jwt: token};
    //turn the session into JSON
    const sessionJSON = JSON.stringify(session);
    //Take JSON and encode it as base64
    const base64 = Buffer.from(sessionJSON).toString('base64');
    //return a string that the cookie with the encoded data
    return [`express:sess=${base64}`];
};