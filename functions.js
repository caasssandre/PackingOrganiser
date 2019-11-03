//const dbMethods = require('./dbMethods')

// function extractDataForDisplay(tripAndActivitiesList){
//   tripAndActivitiesList[0]['activity_list'] = [tripAndActivitiesList[0]['activity_name']]
//   for(let i = 1; i<tripAndActivitiesList.length; i++){
//     if(!tripAndActivitiesList[0]['activity_list'].includes(tripAndActivitiesList[i]['activity_name'])){
//       tripAndActivitiesList[0]['activity_list'].push(tripAndActivitiesList[i]['activity_name'])
//     }
//   }
//   delete tripAndActivitiesList[0]['activity_name']
//   return tripAndActivitiesList[0]
// }

function extractDataForDisplay(gearAndActivitiesData){
  let updatedData = []
  let gearInData = []
  let updatedGear = {}
  for(gear of gearAndActivitiesData){
    if(!gearInData.includes(gear.activity_name)){
      gearInData.push(gear.activity_name)
      updatedGear.activity_name = gear.activity_name
      updatedGear.gear_data = [{gear_name : gear.gear_name, quantity : gear.quantity}]
      updatedData.push(updatedGear)
      updatedGear = {}
    } else{
      for(data of updatedData){
        if(data.activity_name == gear.activity_name){
          data.gear_data.push({gear_name : gear.gear_name, quantity: gear.quantity})
        }
      }
    }
  }
  return updatedData
}



function gearCounter(partySize, gearList){
  for(gear of gearList){
    gear.quantity = Math.ceil(partySize/gear.capacity)
    delete gear.capacity
  }
  return gearList
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