const config = require('./knexfile').development
const database = require('knex')(config)


function getAll(databaseName, db = database){
  return db(databaseName)
}

function getOne(databaseName, columnName, value, db = database){
  return db(databaseName)
    .where(columnName, value)
    .first()
}


function getGearAndActivities(tripId, db = database){
  return db('trips_activities')
    .where('trips_activities.trip_id', tripId)
    .join('activities', 'activities.activity_id', 'trips_activities.activity_id')
    .select('activity_name')
    .join('gears', 'trips_activities.activity_id', 'gears.activity_id')
    .select('gear_name', 'capacity')
}


function add(tableName, newData, db = database){
  return db(tableName)
    .insert(newData)
}

module.exports = {
  getAll,
  getOne,
  add,
  getGearAndActivities
}