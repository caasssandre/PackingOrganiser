const faker = require('faker')

const createFakeUser = () => ({
  first_name : faker.name.firstName(),
  last_name : faker.name.lastName(),
})


exports.seed = async function (knex, Promise) {
  const fakeUsers = []
  for(let i =0; i<100; i++){
    fakeUsers.push(createFakeUser())
  }
  await knex('users')
  .insert(fakeUsers)
}