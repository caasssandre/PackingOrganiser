const express = require("express")
const router = express.Router()
const data = require('./data.json')
const functions = require('./functions')
const activitiesData = require('./activitiesData.json')

router.get('/past', (req, res)=>{
  const viewData = {}
  res.render('./trips/trips', viewData)
})

router.get('/past/:id', (req, res)=>{
  const viewData = {}
  res.render('./trips/past_trip', viewData)
})

router.get('/future', (req, res)=>{
  const viewData = data
  res.render('./trips/trips', viewData)
})

router.get('/future/:id', (req, res)=>{
  const trip = functions.findObject(data, 'id', req.params.id)
  //console.log(trip.activity)
  const viewData = functions.findObject(activitiesData, 'activity', trip.activity)
  //viewData[destination] = trip.destination
  //viewData[date] = trip.date
  res.render('./trips/future_trip', viewData)
})



module.exports = router