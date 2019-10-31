exports.seed = knex =>
  knex('trips').del()
    .then(() =>
      knex('trips').insert([
        {trip_id: 1, trip_date: 2019, duration: 5, destination: 'France'},
      ]))