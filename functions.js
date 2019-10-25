const fs = require('fs')

function addTrip(id, request, data){
   const newTrip = {
     id : id,
     destination : request.body.destination,
     activity : request.body.activity,
     partySize : request.body.partySize,
     date : request.body.date
   }
   data.push(newTrip)
   console.log(data)
   fs.writeFile('./data.json', JSON.stringify(data), (err) => {
    if (err) throw err;
  })
}

module.exports = {
  addTrip :addTrip
}