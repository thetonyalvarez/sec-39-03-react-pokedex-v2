import React from 'react';
import Pokecard from './Pokecard'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Pokedex = (props) => {
  let winner;
  if (props.isWinner) {
    winner =
    <Box>
      <Alert align="justify" severity="success" sx={{my: 4}}>
          <AlertTitle>Winner! Total Exp: {props.exp}</AlertTitle>
      </Alert>
    </Box>
  } else {
    winner = 
    <Box sx={{my: 4}}>
      <Alert align="justify" severity="info" sx={{my: 4}}>
        Total Exp: {props.exp}
      </Alert>
    </Box>
  }

  return (
    <Box>
      <Grid container justifyContent="center" rowSpacing={3} columnSpacing={3} sx={{ mt: 5 }}>
        {props.pokemon.map(p => (
          <Grid item xs={6} md={4} lg={3}>
            <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>
          </Grid>
        ))}
      </Grid>
      {winner}
    </Box>
  )
}

export default Pokedex;