const express=require("express");
const InsertData=require("../controllers/feedController");


const router=express.Router();

router.post("/feedback",InsertData);

module.exports = router;