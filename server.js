const express = require('express')
const hbs = require('express-handlebars')
const tripsRouter = require("./tripsRoutes")
const plannerRouter = require('./plannerRoutes')
const dbMethods = require('./dbMethods')

const server = express()

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

server.get('/', (req, res)=>{
  const template = './trips/home.hbs'
  dbMethods.getAll('users').then(()=>
    res.render(template, {})
    )
})

server.use('/trips', tripsRouter)
server.use('/planner', plannerRouter)

module.exports = server