import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <h1>Hello</h1>
      </Box>
    </ChakraProvider>
  );
}

export default App;
