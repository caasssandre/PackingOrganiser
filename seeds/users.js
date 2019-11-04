const faker = require('faker')

const createFakeUser = (i) => ({
  user_id : i,
  first_name : faker.name.firstName(),
  last_name : faker.name.lastName(),
})


exports.seed = function(knex) {
  return knex('users').del()
    .then(() =>{ 
    let fakeUsers = makeUsersList()
      return knex('users').insert(fakeUsers)
    })
};

function makeUsersList(){
  let fakeUsers = []
  for(let i =1; i<11; i++){
    fakeUsers.push(createFakeUser(i))
  }
  return fakeUsers
}