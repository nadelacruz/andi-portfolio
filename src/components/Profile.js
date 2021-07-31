import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react'

const Profile = () => {
    return (
        <Box display="flex" height="80vh">
            <Box margin="auto auto">
            <Box display="flex" flexDirection="column" alignItems="center">
                <Image borderRadius="full" width="50vh" src="https://i.ibb.co/94nbs4z/Genshin-Impact-Dreamlike-Timelessness1.png"/>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Text as="b"fontSize="5xl">Andi</Text>
                    <Text fontSize="2xl">Digital Artist/Freelance Illustrator</Text>
                </Box>
            </Box>
        </Box>
        </Box>
    );
}
 
export default Profile;