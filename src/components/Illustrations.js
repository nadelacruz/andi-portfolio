import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Thumbnails from './Thumbnails';


const Illustrations = () => {
    const gallery = [
        "https://i.ibb.co/z8GdXpL/Genshin-Impact-Fischl.png",
        "https://i.ibb.co/JCJ0PSf/Genshin-Impact-Hu-Tao.png",
        "https://i.ibb.co/hZR2SXN/Genshin-Impact-Yoimiya.png",
        "https://i.ibb.co/4Mr3b4f/Guardian-Tales-Lahn.png",
        "https://i.ibb.co/jrHq1ZQ/Guardians.png",
        "https://i.ibb.co/092MHk0/Kazuha-and-Beidou.png",
    ];
    return (
        <Box>
            <Box height="80vh" width="auto" margin="25px">
                <Box display="flex" flexDirection="column" alignItems="center" >
                    <Text fontSize="4xl" id="Illustrations">Illustrations</Text>
                    {gallery.map(image => <Thumbnails src={image}/>)}
                </Box>
            </Box>
        </Box>
    );
}
 
export default Illustrations;