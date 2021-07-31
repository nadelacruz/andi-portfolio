import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Illustrations from './components/Illustrations';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
      <Box>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
          <Route exact path="/Illustrations">
            <Illustrations />
          </Route>
        </Switch>
      </Box>
    </ChakraProvider>
    </Router>
  );
}

export default App;
