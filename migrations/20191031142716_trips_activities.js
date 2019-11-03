
exports.up = function(knex) {
  return knex.schema.createTable('trips_activities', (table)=>{
    table.integer('trip_id').unsigned()
    //table.foreign('trip_id').references('trips.trip_id')
    table.integer('activity_id').unsigned()
    //table.foreign('activity_id').references('activities.activity_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('trips_activities')
};