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

router.get('/future', (req, res)=>{
  dbMethods.getAll('trips').then(trips=>{
    res.render('./trips/trips', {trips:trips})
  })
})



router.get('/future/:id', (req, res)=>{
  dbMethods.getOne('trips', 'trip_id', req.params.id)
  .then(tripData=>{
    dbMethods.getGearAndActivities(req.params.id)
    .then(gearData=>{
      gearData = functions.gearCounter(tripData.party_size, gearData)
      functions.extractDataForDisplay(gearData)
      res.render('./trips/future_trip', {tripData, gearData})      
  })
  })
})


module.exports = router