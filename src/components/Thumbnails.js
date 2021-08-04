import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const Thumbnails = ({src}) => {
    return (
        <Box margin="10px">
            <Image height="40vh" borderRadius="10px" src={src}/>
        </Box>
    );
}
 
export default Thumbnails;