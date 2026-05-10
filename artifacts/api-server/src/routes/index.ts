import { Router, type IRouter } from "express";
import healthRouter from "./health";
import itineraryRouter from "./itinerary";

const router: IRouter = Router();

router.use(healthRouter);
router.use(itineraryRouter);

export default router;
