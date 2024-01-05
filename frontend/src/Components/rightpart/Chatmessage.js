// this is our part which show below the Chat header
import React from 'react'
import {Box,styled} from "@mui/material";
import Chatfooter from './Chatfooter';

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;



function Chatmessage() {
    return (
    <Wrapper>
        <Component>

        </Component>
         <Chatfooter/>
    </Wrapper>
    )
}

export default Chatmessage
