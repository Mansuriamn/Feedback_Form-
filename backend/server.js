const express=require("express");
const app=express();
const dotenv=require("dotenv").config();
const ConnectDB=require("./config/db");
const cors=require("cors");
const InsertData=require("./controllers/feedController");

ConnectDB();

app.use(express.json());

app.use(cors());


app.post("/feedback",InsertData);

app.listen(7000,()=>console.log("Server started http://localhost:7000"));