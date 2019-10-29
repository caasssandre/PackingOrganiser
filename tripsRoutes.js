const express = require("express")
const router = express.Router()
const functions = require('./functions')
const data = require('./data.json')
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
  const viewData = {future_trips : data}
  res.render('./trips/trips', viewData)
})

router.get('/future/:id', (req, res)=>{
  const trip = functions.findObject(data, 'id', req.params.id)
  const viewData = {
    items : functions.findObject(activitiesData, 'activity', trip.activity),
    date : trip.date,
    destination : trip.destination,
    gearQtyList : functions.createPersonalisedList(trip.activity, activitiesData, trip.partySize)
  }
  res.render('./trips/future_trip', viewData)
})



module.exports = router