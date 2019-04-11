
const request = require('supertest');
const server = require('./index.js');

describe('index.js', () => {
    it('should respond status 200', async () => {
        const result = await request(server).get('/');
        expect(result.status).toBe(200);
    });

    describe('CREATE', () => {
        it('should respond status 201', async () => {
            const resource = {name:'steve',pass:'dave'};
            const result = await request(server).post('/', resource);
            expect(result.status).toBe(201);
        });

        it('should return the new resource, async () => {
            // const resource = {name:'steve',pass:'dave'};
            // const result = await request(server).post('/', resource);
            expect(result.status).toBe(201);
        });
    });
});