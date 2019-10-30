
exports.up = function(knex) {
  return knex.schema.createTable('trips', (table) => {
    table.increments('trip_id').primary()
    table.string('destination')
    table.date('trip_date')
    table.integer('duration')
  })
  
};

exports.down = function(knex) {
   return knex.schema.dropTable('trips')
};
