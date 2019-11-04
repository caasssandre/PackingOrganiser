const express = require("express")
const router = express.Router()
const dbMethods = require('./dbMethods')
const functions = require('./functions')

router.get('/past', (req, res)=>{
  res.render('./trips/trips', {})
})

router.get('/past/:id', (req, res)=>{
  const viewData = {}
  res.render('./trips/past_trip', viewData)
})

router.get('/:id/future', (req, res)=>{
  dbMethods.getUserTrips(req.params.id).then(trips=>{
    res.render('./trips/trips', {trips:trips})
  })
})



router.get('/future/:id', (req, res)=>{
  dbMethods.getOne('trips', 'trip_id', req.params.id)
  .then(tripData=>{
    dbMethods.getGearAndActivities(req.params.id)
    .then(gearData=>{
      gearData = functions.gearCounter(tripData.party_size, gearData)
      gearData = functions.extractDataForDisplay(gearData)
      const viewData = {
        activitiesAndGear : gearData,
        tripData
      }
      res.render('./trips/future_trip', viewData)      
    })
  })
})


module.exports = router