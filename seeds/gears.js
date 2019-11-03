exports.seed = function(knex) {
  return knex('gears').del()
    .then(function () {
      return knex('gears').insert([
        {capacity: 4, activity_id: 1, gear_name: 'knife'},
        {capacity: 1, activity_id: 1, gear_name: 'sleeping mat'},
        {capacity: 3, activity_id: 1, gear_name: 'gas cooker'},
        {capacity: 2, activity_id: 2, gear_name: 'rope'},
        {capacity: 2, activity_id: 2, gear_name: 'grigri'},
        {capacity: 1, activity_id: 2, gear_name: 'safety'},
        {capacity: 1, activity_id: 3, gear_name: 'swimsuit'},
        {capacity: 1, activity_id: 3, gear_name: 'towel'},
        {capacity: 4, activity_id: 3, gear_name: 'umbrella'}
      ]);
    });
};
