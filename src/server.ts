import App from './app'
import mongoose from "mongoose"
import express from 'express'

import * as bodyParser from 'body-parser'

import VisitsController from './controllers/visits.controller'
import ProtectedController from './controllers/protected.controller'
import AuthController from './controllers/auth.controller'
import StaticFileController from './controllers/staticfile.controller'


import dotenv from "dotenv";
import path from 'path'

dotenv.config();

const PORT: number = Number.parseInt(process.env.PORT || "3000") 


const app = new App({
    port: PORT,
    controllers: [
        new VisitsController(),
        new ProtectedController(),
        new AuthController(),
        new StaticFileController(),

    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        express.static(path.join(__dirname, "public")),
    ]
})

// add middlewares
// app.use(express.static(path.join(__dirname, "public")));

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
