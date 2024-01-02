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