const express = require("express")
const router = express.Router()
const dbMethods = require('./dbMethods')

router.get('/activities', (req, res)=>{
  dbMethods.getAll('activities').then(thing=>{
    res.send(thing)
  })
})

router.get('/trips', (req, res)=>{
  dbMethods.getAll('trips').then(thing=>{
    res.send(thing)
  })
})

router.get('/gears', (req, res)=>{
  dbMethods.getAll('gears').then(thing=>{
    res.send(thing)
  })
})

router.get('/tripsActivity', (req, res)=>{
  dbMethods.getAll('trips_activities').then(thing=>{
    res.send(thing)
  })
})

module.exports = router