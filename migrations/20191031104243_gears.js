
exports.up = function(knex) {
  return knex.schema.createTable('gears', (table)=>{
    table.increments('gear_id')
    table.integer('capacity')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('gears')
};
