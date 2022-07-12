import React, { useState } from 'react';
import logo from './pokedex.png';
import Pokedex from './Pokedex';
import Box from '@mui/material/Box';
import './App.css'

function App() {

  return (
    <Box className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <Pokedex/>
    </Box>

  )
}

export default App
