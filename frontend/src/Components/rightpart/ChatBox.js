import React from 'react'
import Chatheader from './Chatheader'
import Chatmessage from './Chatmessage'
import { Box } from '@mui/material';
import { UserContext } from '../Contextapi/Userprovider';
import { useContext } from 'react';



function ChatBox() {

  const { person } = useContext(UserContext);   // here
  return (
   <Box>
    <Chatheader person={person}/>
    <Chatmessage person={person} />
   </Box>
  )
}

export default ChatBox
