
const db = require('./dbConfig.js');
const Users = require('./usersModel.js');


describe('users model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('CREATE', () => {
        it('insert() should insert and return new user', async () => {
            let newUser = await Users.insert({name:'steve',pass:'dave'});
            expect(newUser.name).toBe('steve');
            let allUsers = await Users.getAll();
            expect(allUsers.length).toBe(1);
        });
    });

    describe('DELETE', () => {
        it('remove(id) should delete the resource', async () => {
            let newUser = await Users.insert({name:'steve',pass:'dave'});
            expect(newUser.name).toBe('steve');
            expect(newUser.id).toBe(1);
            let allUsers = await Users.getAll();
            expect(allUsers.length).toBe(1);

            let del1 = await Users.remove(1);
            expect(del1).toBe(1);
            let allUsers2 = await Users.getAll();
            expect(allUsers2.length).toBe(0);
        });
    });


});