
exports.seed = function(knex) {
  return knex('trips_activities').del()
    .then(function () {
      return knex('trips_activities').insert([
        {trip_id: 1, activity_id:1},
        {trip_id: 1, activity_id:2},
        {trip_id: 2, activity_id:1},
        {trip_id: 2, activity_id:3},
        {trip_id: 3, activity_id:1},
        {trip_id: 4, activity_id:1},
        {trip_id: 4, activity_id:2},
        {trip_id: 5, activity_id:1},
        {trip_id: 5, activity_id:2},
        {trip_id: 5, activity_id:3}
      ]);
    });
};
