import React from 'react'
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import Chatdialog from './Chatdialog';

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;

function messenger() {
  return (
    <Component>
      {
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <Chatdialog />
        </>
      }
    </Component>



  )
}

export default messenger;
