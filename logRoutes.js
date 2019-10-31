const express = require("express")
const router = express.Router()
const dbMethods = require('./dbMethods')

router.get('/activities', (req, res)=>{
  dbMethods.getAll('activities').then(thing=>{
    console.log(thing)
    res.send('ok')
  })
})

module.exports = router