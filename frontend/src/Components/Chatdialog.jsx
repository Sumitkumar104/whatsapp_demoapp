// import React, { useContext } from 'react'
import { Dialog, styled, Box } from '@mui/material';

import Conversation from './leftpart/Conversations';
// import EmptyChat from './rightpart/emptychat';
import ChatBox from './rightpart/Chatbox/ChatBox';
// import { UserContext } from './Contextapi/Userprovider';

// components
// import Menu from './menu/Menu';
// import ChatBox from './chat/ChatBox';
// import EmptyChat from './chat/EmptyChat';

const Component = styled(Box)`
    display: flex;
`;

const LeftComponent = styled(Box)`
    min-width: 450px;
`;

const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
};




function Chatdialog() {
    // const { person } = useContext(UserContext);

    return (
        <Dialog
            open={true}
            BackdropProps={{ style: { backgroundColor: 'unset' } }}
            PaperProps={{ sx: dialogStyle }}
            maxWidth={'md'}
        >
            <Component>

                {/* left part */}
                <LeftComponent>
                    <Conversation />
                </LeftComponent>

                {/* right part */}
                <RightComponent>
                    {/* {
                      Object.keys(person).length ? <ChatBox/> : <EmptyChat />
                  } */}
                    <ChatBox />
                </RightComponent>

            </Component>
        </Dialog>

    )
}

export default Chatdialog
