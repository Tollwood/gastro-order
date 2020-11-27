import App from './app'
import mongoose from "mongoose"


import * as bodyParser from 'body-parser'

import HomeController from './controllers/home.controller'
import VisitsController from './controllers/visits.controller'
import ProtectedController from './controllers/protected.controller'
import AuthController from './controllers/auth.controller'


import dotenv from "dotenv";

dotenv.config();

const PORT: number = Number.parseInt(process.env.PORT || "3000") 


const app = new App({
    port: PORT,
    controllers: [
        new HomeController(),
        new VisitsController(),
        new ProtectedController(),
        new AuthController(),

    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
    ]
})

const url = process.env.MONGO_URL ||"";
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(url, options)
  .then(() =>
    app.listen()
  )
  .catch(error => {
    throw error
  })
