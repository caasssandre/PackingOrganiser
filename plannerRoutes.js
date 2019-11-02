const express = require("express")
const router = express.Router()
const functions = require('./functions')
const dbMethods = require('./dbMethods')


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