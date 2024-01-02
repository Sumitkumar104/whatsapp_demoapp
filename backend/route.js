const express=require("express");
const route=express.Router();

const adduser=require("./controllers/adduser");

route.post("/adduser",adduser);

module.exports=route;
