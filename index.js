
const express = require('express');
const server = express();
server.use(express.json());

server.get('/', async (req,res) => {
    res.status(200).json({message:'yaya'});
});

server.post('/', async (req,res) => {
    const {name,pass} = req.body;
    res.status(201).json({name,pass});
});

module.exports = server;

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.testing);