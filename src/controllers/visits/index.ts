import { Response, Request } from "express"
import { IVisit } from "../../types/Visit"
import VisitModel from "../../schema/Visit"

const getVisits = async (req: Request, res: Response): Promise<void> => {
  try {
    const tenantId = req.subdomains[0] || "demo";
    const Visit = VisitModel.createModel(tenantId)
    const visits: IVisit[] = await Visit.find()
    res.status(200).json({content: visits })
  } catch (error) {
    throw error
  }
}

const addVisit = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body as Pick<IVisit, "from" | "table" | "households">
      const Visit = VisitModel.createModel(req.subdomains[0] || "demo")
      const visit: IVisit = new Visit({
        from: body.from,
        table: body.table,
        households: body.households
      })
      const savedVisit: IVisit = await visit.save()
      res
        .status(201)
        .json(savedVisit)
    } catch (error) {
      throw error
    }
  }


  
  export { getVisits, addVisit }