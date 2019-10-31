const express = require("express")
const router = express.Router()
const dbMethods = require('./dbMethods')

router.get('/past', (req, res)=>{
  const viewData = {}
  res.render('./trips/trips', viewData)
})

router.get('/past/:id', (req, res)=>{
  const viewData = {}
  res.render('./trips/past_trip', viewData)
})

router.get('/future', (req, res)=>{
  dbMethods.getAll('trips').then(trips=>{
    res.render('./trips/trips', {trips:trips})
  })
})



router.get('/future/:id', (req, res)=>{
  dbMethods.getTripAndActivities(req.params.id).then(activities => {
    console.log(activities)
    res.render('./trips/future_trip', {})
    //const activitiesList = []
    // for(let activity of activities){
    //   activitiesList.push(activity.activity_id)
    // }
    //return activitiesList
  })
})
  // const viewData = {
  //   items : functions.findObject(activitiesData, 'activity', trip.activity),
  //   date : trip.date,
  //   destination : trip.destination,
  //   gearQtyList : functions.createPersonalisedList(trip.activity, activitiesData, trip.partySize)
  // }
  // })



module.exports = router