import React from 'react';
import { Box, Typography } from '@mui/material';
import './Chatheader.css'; // Import the CSS file

const Chatheader = () => {
    const imageUrl = "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o";

    return (
        <Box className="header">
            <img className="image" src={imageUrl} alt="dpimage.png" />
            <Box className="content">
                <Typography className="name">My name</Typography>
                <Typography className="status">User status</Typography>
            </Box>
        </Box>
    );
};

export default Chatheader;
