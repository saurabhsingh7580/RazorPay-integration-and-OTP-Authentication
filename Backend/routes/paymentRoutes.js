import express from "express";
import { checkOut, paymentVerification } from "../controllers/paymentControllers.js";


const router = express.Router()

router.route("/checkout").post(checkOut)
router.route("/paymentverifiction").post(paymentVerification)

export default router;