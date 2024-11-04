import express from "express";
import  homePage  from "../app/controllers/siteControllers.js";
const router=express.Router();

router.use("/",homePage.show);

export default router;