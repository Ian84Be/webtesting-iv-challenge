
const db = require('./dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(user) {
  const [id] = await db('users').insert(user);
  return db('users').where({id}).first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db('users').where({id}).delete();
}

function getAll() {
  return db('users');
}

function findById(id) {
  return null;
}
