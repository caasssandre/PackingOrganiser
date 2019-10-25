const express = require("express")
const router = express.Router()

router.get('/past', (req, res)=>{
  res.send('hello past trips')
})

router.get('/past/:id', (req, res)=>{
  res.send('hello this trip ' + req.params.id)
})

router.get('/future', (req, res)=>{
  res.send('hello future trips')
})

router.get('/future/:id', (req, res)=>{
  res.send('hello this future trip ' + req.params.id)
})

module.exports = router