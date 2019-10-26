const express = require("express")
const router = express.Router()
const data = require('./data.json')
const functions = require('./functions')

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
  const viewData = functions.findTrip(data, req.params.id)
  res.render('./trips/future_trip', viewData)
})



module.exports = router