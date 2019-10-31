exports.seed = function(knex) {
  return knex('activities').del()
    .then(function () {
      return knex('activities').insert([
        {activity_id : 1, activity_name: 'Camping', duration: 5},
        {activity_id : 2, activity_name: 'Climbing', duration: 4},
        {activity_id : 3, activity_name: 'Beach', duration: 10}
      ]);
    });
};
