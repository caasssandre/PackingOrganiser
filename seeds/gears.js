exports.seed = function(knex) {
  return knex('gears').del()
    .then(function () {
      return knex('gears').insert([
        {capacity: 1, activity_id: 1, gear_name: 'knife'},
        {capacity: 2, activity_id: 1, gear_name: 'rope'},
        {capacity: 3, activity_id: 3, gear_name: 'tent'}
      ]);
    });
};
