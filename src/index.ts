import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import routes from './routes/route'
import jwt from "./_helpers/jwt"
const app = express()
// initialize configuration
dotenv.config()

// initialize mongoose
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@${process.env.MONGOURL}/${process.env.MONGODBNAME}?retryWrites=true&w=majority`, {useNewUrlParser: true, user: process.env.MONGOUSER, pass: process.env.MONGOPASSWORD, useUnifiedTopology:true})
mongoose.set('useCreateIndex', true)

// Body parser
app.use(bodyParser.urlencoded({extended: true}))

// get router
const router = express.Router()

// options for cors midddleware
const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: '*',
  preflightContinue: false,
}

// use cors middleware
router.use(cors(options))
app.use(jwt.jwt())

// add your routes
app.use(express.json())
app.use(routes)

// enable pre-flight
router.options('*', cors(options))

const port = process.env.SERVER_PORT || 8000
// start the Express server
app.listen( port, () => {
     // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` )
} )