import React from 'react'
import { AppBar, styled, Box } from '@mui/material';
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
         <h1>this is messenger header</h1>
          </Header>
          <Chatdialog />
        </>
      }
    </Component>



  )
}

export default messenger;
