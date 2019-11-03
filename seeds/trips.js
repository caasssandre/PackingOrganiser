exports.seed = knex =>
  knex('trips').del()
    .then(() =>
      knex('trips').insert([
        {trip_id: 1, trip_date: 2019, party_size: 5, destination: 'France'},
        {trip_id: 2, trip_date: 2020, party_size: 4, destination: 'Italy'},
        {trip_id: 3, trip_date: 2028, party_size: 10, destination: 'Invercargill'},
        {trip_id: 4, trip_date: 2034, party_size: 1, destination: 'Lower Hutt'},
        {trip_id: 5, trip_date: 2023, party_size: 2, destination: 'Tasmania'}
      ]))