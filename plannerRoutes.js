const express = require("express")
const router = express.Router()
const dbMethods = require('./dbMethods')


router.get('/', (req, res)=>{
  dbMethods.getAll('activities')
  .then(activity_data=>{
    res.render('./trips/planner', { activities : activity_data})
  })  
})

router.post('/', (request, response) => {
  let newTrip = {
    destination : request.body.destination,
    trip_date : request.body.trip_date,
    party_size : request.body.trip_date
  }
  
  dbMethods.add('trips', newTrip).then(thisTripId=>{
    let newTripActivity = {
      trip_id : thisTripId[0],
      activity_id : request.body.activity_id
    }
    dbMethods.add('trips_activities', newTripActivity)
    .then(()=>{
      response.redirect('/trips/future/'+thisTripId[0])
    })
    // use thisTrip.trip_id to redirect to correct page
  })
})

module.exports = router