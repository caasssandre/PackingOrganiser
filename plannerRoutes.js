const express = require("express")
const router = express.Router()
const dbMethods = require('./dbMethods')


router.get('/', (req, res)=>{
  // const viewData = {items : activitiesData}
  res.render('./trips/planner', {})
})

router.post('/', (request, response) => {
  let newTrip = {
    destination : request.body.destination,
    trip_date : request.body.trip_date,
    party_size : request.body.trip_date
  }
  console.log(newTrip)
  dbMethods.addTrip(newTrip).then(thisTrip=>{
    // use thisTrip.trip_id to redirect to correct page
    response.redirect('/trips/future/')
  })
})

module.exports = router