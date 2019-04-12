
const express = require('express');
const server = express();
server.use(express.json());

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.testing);

const users = require('./usersModel.js');

server.get('/', async (req,res) => {
    res.status(200).json({message:'yaya'});
});

server.post('/users', async (req,res) => {
    const {name,pass} = req.body;
    if (!name || !pass) {
        res.status(400).json({error: 'please provide name/pass'});
    } else {
        try {
            const newUser = await users.insert(req.body);
            if (newUser) {
                res.status(201).json(newUser);
            }
        }
        catch(err) {
            res.status(500).json(err);
        }
    }
});

module.exports = server;

