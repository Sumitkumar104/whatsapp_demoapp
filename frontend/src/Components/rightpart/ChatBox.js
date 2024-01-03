import React from 'react'
import Chatheader from './Chatheader'
import Chatmessage from './Chatmessage'
import Chatfooter from './Chatfooter'
import { Box } from '@mui/material';

function ChatBox() {
  return (
   <Box>
    <Chatheader/>
    <Chatmessage/>
    <Chatfooter/>
   </Box>
  )
}

export default ChatBox
