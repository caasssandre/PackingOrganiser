
exports.up = function(knex) {
  return knex.schema.createTable('trips_activities', (table)=>{
    table.string('trip_id')
    table.string('activity_id')
  })
};

exports.down = function(knex) {
  
};
