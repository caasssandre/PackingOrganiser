const express = require("express")
const router = express.Router()
const data = require('./data.json')
const activitiesData = require('./activitiesData.json')
const functions = require('./functions')


router.get('/', (req, res)=>{
  const viewData = {items : activitiesData}
  res.render('./trips/planner', viewData)
})

router.post('/', (request, response) => {
  let id = data.length + 1
  response.redirect('/trips/future/' + id)
  functions.addTrip(id, request, data)
})

module.exports = router