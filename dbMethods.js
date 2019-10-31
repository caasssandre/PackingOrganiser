const config = require('./knexfile').development
const database = require('knex')(config)


function getAll(databaseName, db = database){
  return db(databaseName)
}

function getOne(databaseName, columnName, value, db = database){
  return db(databaseName)
    .where(columnName, value)
}

function getTripAndActivities(value, db = database){
  return db('trips_activities')
    .where('trip_id', value)
    .join('activities', 'activities.activity_id', 'trips_activities.activity_id')
}

module.exports = {
  getAll,
  getOne,
  getTripAndActivities
}