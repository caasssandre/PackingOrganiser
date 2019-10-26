const fs = require('fs')

function addTrip(id, request, data){
   const newTrip = request.body
   newTrip.id = id
   data.push(newTrip)
   fs.writeFile('./data.json', JSON.stringify(data), (err) => {
    if (err) throw err;
  })
}

function findTrip(data, id){
  return data.find(trip => trip.id == id)
}

module.exports = {
  addTrip :addTrip,
  findTrip : findTrip
}