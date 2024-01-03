const express=require("express");
const route=express.Router();

const adduser=require("./controllers/adduser");
const addnewuserforchat=require("./controllers/addnewuserforchat");
const getusers=require("./controllers/getusers");    // use to show the contacts with which he chats previously.

route.post("/adduser",adduser);           // it have data come from frontend in ( request ).body which we store in database .
route.post("/addnewcontact",addnewuserforchat);  
route.get("/getuser",getusers);  //  it return user object which conatin contacts in response .

module.exports=route;
