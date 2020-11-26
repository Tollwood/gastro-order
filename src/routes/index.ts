import { Router } from "express"
import { getVisits, addVisit } from "../controllers/visits"

const router: Router = Router()

router.get("/api/visits", getVisits)

router.post("/api/visits", addVisit)

// router.put("/api/visits/:id", updateVisit)

// router.delete("/api/visits/:id", deleteVisit)

export default router