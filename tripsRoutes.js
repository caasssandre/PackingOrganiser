const express = require("express")
const router = express.Router()
const dbMethods = require('./dbMethods')
const functions = require('./functions')

router.get('/:id/past', (req, res)=>{
  dbMethods.getUserTrips(req.params.id, 'past').then(trips=>{
    console.log(trips)
    res.render('./trips/pastTrips', {id:req.params.id, pastTrips: trips})
  })
})

// router.get('/:id/past/:trip', (req, res)=>{
//   const viewData = {}
//   res.render('./trips/past_trip', viewData)
// })

router.get('/:id/future', (req, res)=>{
  dbMethods.getUserTrips(req.params.id, 'future').then(trips=>{
    res.render('./trips/trips', {trips:trips, id:req.params.id})
  })
})



router.get('/:id/future/:trip', (req, res)=>{
  dbMethods.getOne('trips', 'trip_id', req.params.trip)
  .then(tripData=>{
    dbMethods.getGearAndActivities(req.params.trip)
    .then(gearData=>{
      gearData = functions.gearCounter(tripData.party_size, gearData)
      gearData = functions.extractDataForDisplay(gearData)
      const viewData = {
        activitiesAndGear : gearData,
        tripData,
        id: req.params.id
      }
      res.render('./trips/future_trip', viewData)      
    })
  })
})

router.post('/archive/:id/:trip', (req, res)=>{
  dbMethods.archiveTrip(req.params.trip, req.params.id)
    .then(()=>res.redirect('/trips/'+req.params.id+'/'+'past'))
})


module.exports = router