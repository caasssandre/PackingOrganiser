const fs = require('fs')
const dbMethods = require('./dbMethods')


function addTrip(id, request, data){
   const newTrip = request.body
   newTrip.id = id
   data.push(newTrip)
   fs.writeFile('./data.json', JSON.stringify(data), (err) => {
    if (err) throw err;
  })
}



function gearCounter(partySize, gearObject){
  gearObject.quantity = Math.ceil(partySize/gearObject.capacity)
  //console.log(gearObject)
  return gearObject
}

// function createPersonalisedList(activity, activitiesData, partySize){
//   let updatedGearList = []
//   let activitiesArray = findObject(activitiesData, "activity", activity).sharedGear
//   activitiesArray.forEach(gearObject => updatedGearList.push(gearCounter(partySize, gearObject))) 
//   console.log(activitiesArray)
//   return activitiesArray
// }

module.exports = {
  addTrip :addTrip,
  //findObject : findObject,
  //createPersonalisedList: createPersonalisedList
}