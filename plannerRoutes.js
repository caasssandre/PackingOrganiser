const express = require("express")
const router = express.Router()

router.get('/', (req, res)=>{
  viewData = {}
  res.render('./trips/planner', viewData)
})

module.exports = router