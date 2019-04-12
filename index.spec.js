
const request = require('supertest');
const server = require('./index.js');
const db = require('./dbConfig.js');

describe('index.js', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('get /', () => {
        it('should respond status 200', async () => {
            const result = await request(server).get('/');
            expect(result.status).toBe(200);
        });
    });

    describe('post /users', () => {
        it('should respond status 201 if successful', async () => {
            const user = {name:'steve',pass:'dave'};
            const result = await request(server).post('/users').send(user);
            expect(result.status).toBe(201);
        });

        it('should respond status 400 if name/pass is missing', async () => {
            const user = {name:'dave'};
            const result = await request(server).post('/users').send(user);
            expect(result.status).toBe(400);

            const user2 = {pass:'dave'};
            const result2 = await request(server).post('/users').send(user2);
            expect(result2.status).toBe(400);
        });
    });
});