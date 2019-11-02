const fs = require('fs')
const dbMethods = require('./dbMethods')

function extractDataForDisplay(tripAndActivitiesList){
  tripAndActivitiesList[0]['activity_list'] = [tripAndActivitiesList[0]['activity_name']]
  for(let i = 1; i<tripAndActivitiesList.length; i++){
    if(!tripAndActivitiesList[0]['activity_list'].includes(tripAndActivitiesList[i]['activity_name'])){
      tripAndActivitiesList[0]['activity_list'].push(tripAndActivitiesList[i]['activity_name'])
    }
  }
  delete tripAndActivitiesList[0]['activity_name']
  return tripAndActivitiesList[0]
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
  gearCounter,
  extractDataForDisplay
}