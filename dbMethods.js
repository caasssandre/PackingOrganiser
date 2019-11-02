const config = require('./knexfile').development
const database = require('knex')(config)


function getAll(databaseName, db = database){
  return db(databaseName)
}

function getOne(databaseName, columnName, value, db = database){
  return db(databaseName)
    .where(columnName, value)
}

function getTripAndActivities(tripId, db = database){
  return db('trips_activities')
    .where('trips_activities.trip_id', tripId)
    .join('activities', 'activities.activity_id', 'trips_activities.activity_id')
    .select('activity_name')
    .join('trips', 'trips.trip_id', 'trips_activities.trip_id')
    .select('destination', 'trip_date')
}

function getGear(tripId, db = database){
  return db('trips_activities')
    .where('trips_activities.trip_id', tripId)
    .join('gears', 'trips_activities.activity_id', 'gears.activity_id')
}


function addTrip(tripObject, db = database){
  return db('trips')
    .insert(tripObject)
}

module.exports = {
  getAll,
  getOne,
  getTripAndActivities,
  addTrip,
  getGear
}