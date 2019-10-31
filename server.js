const express = require('express')
const hbs = require('express-handlebars')
const tripsRouter = require("./tripsRoutes")
const plannerRouter = require('./plannerRoutes')
const logsRouter = require('./logRoutes')
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
  dbMethods.getAll('users').then(users=>
    //console.log(thing)
    res.render(template, {users:users})
    )
})

server.use('/trips', tripsRouter)
server.use('/planner', plannerRouter)
server.use('/consoleLogs', logsRouter)

module.exports = server