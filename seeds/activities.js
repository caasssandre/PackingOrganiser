exports.seed = function(knex) {
  return knex('activities').del()
    .then(function () {
      return knex('activities').insert([
        {activity_name: 'Camping', duration: 5},
        {activity_name: 'Climbing', duration: 4},
        {activity_name: 'Beach', duration: 10}
      ]);
    });
};
