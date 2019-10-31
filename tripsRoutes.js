const express = require("express")
const router = express.Router()
const data = require('./data.json')
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
  const viewData = {future_trips : data}
  res.render('./trips/trips', viewData)
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