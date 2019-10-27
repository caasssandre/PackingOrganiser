const fs = require('fs')

function addTrip(id, request, data){
   const newTrip = request.body
   newTrip.id = id
   data.push(newTrip)
   fs.writeFile('./data.json', JSON.stringify(data), (err) => {
    if (err) throw err;
  })
}

function findObject(data, key, value){
  return data.find(object => object[key] == value)
}

module.exports = {
  addTrip :addTrip,
  findObject : findObject
}