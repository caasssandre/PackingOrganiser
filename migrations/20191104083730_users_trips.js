
exports.up = function(knex) {
  return knex.schema.createTable('users_trips', (table)=>{
    table.integer('user_id')
    table.integer('trip_id')
    table.string('trip_status')
  })
};

exports.down = function(knex) {  
  return knex.schema.dropTable('users_trips')
};
