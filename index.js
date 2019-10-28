import express from 'express'
import parser from 'body-parser'
import dotenv from 'dotenv'

//Build the app
const app = express()
app.use(parser.json())
app.use(parser.urlencoded({extended: true}))

//Load environment variables
dotenv.config()
var env = process.env.NODE_ENV || 'development'
var port = process.env.port || 1775

//Set routes
const routes = require("./routes")
app.use('/', routes)


app.listen(port, () => {
    console.log(`Your NEMS server is running on port ${port}` )
})