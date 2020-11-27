import * as express from 'express'
import { Request, Response } from 'express'
import path from 'path'

class HomeController {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/**', this.staticFiles)
    }

    staticFiles = (req: Request, res: Response) => {
        console.log("serve static file")
        res.sendFile(path.join(__dirname,"..", "public", "index.html"));
    }
}

export default HomeController