import express from 'express'
import { Application } from 'express'

class App {
    public app: Application
    public port: number

    constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
        this.app = express()
        this.port = appInit.port

        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use(controller.path, controller.router)
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App


// import express, { Express } from "express"
// import cors from "cors"
// import todoRoutes from "./routes"
// import path from "path";


// const app: Express = express()



// app.use(express.json())
// app.use(cors())
// app.use(todoRoutes)


  

// // add middlewares
// app.use(express.static(path.join(__dirname, "public")));
// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });