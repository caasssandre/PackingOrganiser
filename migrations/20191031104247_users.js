
exports.up = function(knex) {
  return knex.schema.createTable('users', (table)=>{
    table.increments('user_id')
    table.string('first_name')
    table.string('last_name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};