import newsNav from "../app/controllers/newsController.js";
import express  from "express";
const router=express.Router();

router.use("/:slug/:slug",(req,res)=>{
    res.send("Hello");
});
router.use("/:slug",newsNav.show);
router.use("/", newsNav.news);
export default router;





