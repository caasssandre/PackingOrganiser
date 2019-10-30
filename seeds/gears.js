exports.seed = function(knex) {
  return knex('gears').del()
    .then(function () {
      return knex('gears').insert([
        {capacity: 1},
        {capacity: 2},
        {capacity: 3}
      ]);
    });
};
