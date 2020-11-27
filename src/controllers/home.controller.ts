import * as express from 'express'
import { Request, Response } from 'express'

class HomeController {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/', this.home)
    }

    home = (req: Request, res: Response) => {
      res.send("success")
    }
}

export default HomeController