import express from "express";
import addConsult from "../controller/consult.controller.js";

const router = express.Router();

router.post("/addconsult",addConsult);

export default router;