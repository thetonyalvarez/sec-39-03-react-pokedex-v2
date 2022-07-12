import React, { useState } from 'react';
import logo from './pokedex.png';
import Pokegame from './Pokegame';
import Box from '@mui/material/Box';
import './App.css'

function App() {

  return (
    <Box className="App">
      <header className="App-header">
        <Box sx={{ p: 4 }}>
          <img src={logo} alt="logo" />
        </Box>
      </header>
      <Pokegame />
    </Box>

  )
}

export default App
