import express from 'express'

const routes = express.Router()
const basePath = '/api/v1'

//Require routes as needed
//const myRoute = require('./myController')
//routes.use(`${basePath}/myroutes`, myRouter)

routes.get(basePath, (req, resp) => {
    resp.status(200).json({message: 'Connected'})
})

module.exports = routes