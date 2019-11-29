const express = require("express")
const router = express.Router()
const dbMethods = require('./dbMethods')

router.get('/:id', (req, res)=>{
  res.render('./trips/packingList', {})
})

router.post('/listActivity', (req,res)=>{
  console.log('you clicked here')
})


module.exports = router