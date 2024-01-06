import React from 'react'
import Chatheader from './chatboxbody/Chatheader'
import Chatmessage from './chatboxbody/Chatmessage'
import { Box } from '@mui/material';
import { UserContext } from '../../Contextapi/Userprovider';
import { useContext } from 'react';



function ChatBox() {

  const { person } = useContext(UserContext);   // here
  return (
   <Box>

    {/* chatboxbody */}
    <Chatheader person={person}/>
    <Chatmessage person={person} />
   </Box>
  )
}

export default ChatBox
