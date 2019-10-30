const config = require('./knexfile').development
const database = require('knex')(config)


function getAll(databaseName, db = database){
  return db(databaseName)
}

module.exports = {
  getAll,
}