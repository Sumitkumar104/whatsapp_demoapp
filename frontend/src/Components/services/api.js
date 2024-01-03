//this app contains our all APIs

import axios from "axios";

const url='http://localhost:3000';

export const adduser= async (data)=>{
    try{
         await axios.post(`${url}/adduser`,data);
         console.log("user is succesfull created  in database");
    }

    catch(err){
        console.log("There is some error in sending the data to database ")
      console.error(err);
    }

}

export const addnewuserforchat= async (data)=>{
  try{
       await axios.post(`${url}/addnewcontact`,data);     // data contain email as new contact .
       console.log("user is succesfull add in chat list");
  }

  catch(err){
      console.log("There is some error to add new user for chat at frontend side ")
    console.error(err);
  }

}

export const getuser= async (data)=>{
  try{
       const response=await axios.get(`${url}/getuser`,data);   
       console.log("users are succesfull show in chat list ");
       return response.json();
  }

  catch(err){
      console.log("there is some  error in fetch all users ")
    console.error(err);
  }

}