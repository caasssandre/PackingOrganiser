
exports.up = function(knex) {
  return knex.schema.createTable('gears', (table)=>{
    table.increments('gear_id')
    table.integer('capacity')
    table.string('gear_name')
    table.string('activity_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('gears')
};
