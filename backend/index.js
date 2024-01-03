const express=require("express");
const app=express();
const route=require("./route");
require("dotenv").config();

app.use(express.json());
  
// also call the databse connection

const PORT=8000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
app.use("/",route);

