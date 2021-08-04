import React from 'react';
import { Box, Image, Text, MenuButton, Button, Menu } from '@chakra-ui/react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'

const Profile = () => {
    return (
        <Box display="flex" height="100vh" backgroundColor="#000000">
            <Box margin="auto">
            <Box display="flex" flexDirection="column" alignItems="center">
                <Image borderRadius="full" width="50vh" src="https://i.ibb.co/94nbs4z/Genshin-Impact-Dreamlike-Timelessness1.png"/>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Text color="#FEFFFE" as="b"fontSize="5xl">Andi</Text>
                    <Text color="#FEFFFE" fontSize="2xl">Digital Artist/Freelance Illustrator</Text>
                    <Box margin="20px">
                        <Button variant="link" color="white" as="a" href="https://www.instagram.com/hyodydhk/" target="_blank"><FaInstagram size="30px"/></Button>
                        <Button variant="link" color="white" as="a" href="https://twitter.com/hyodydhk" target="_blank"><FaTwitter size="30px"/></Button>
                    </Box>
                </Box>
            </Box>
        </Box>
        </Box>
    );
}
 
export default Profile;