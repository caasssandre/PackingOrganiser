
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


module.exports = {
  gearCounter,
  extractDataForDisplay
}