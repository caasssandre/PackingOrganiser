const express = require("express")
const router = express.Router()

router.get('/past', (req, res)=>{
  const viewData = {}
  res.render('./trips/trips', viewData)
})

router.get('/past/:id', (req, res)=>{
  const viewData = {}
  res.render('./trips/past_trip', viewData)
})

router.get('/future', (req, res)=>{
  const viewData = {}
  res.render('./trips/trips', viewData)
})

router.get('/future/:id', (req, res)=>{
  const viewData = {}
  res.render('./trips/future_trip', viewData)
})

module.exports = router