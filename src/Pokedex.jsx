import React from 'react';
import Pokecard from './Pokecard'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Pokedex = (props) => {
  let winner;
  if (props.isWinner) {
    winner =
      <Box sx={{my: 4}}>
        <Typography variant="h3" component="h3">
          THIS HAND WINS!
        </Typography>
      </Box>
  }
  return (
    <Box>
      <Grid container justifyContent="center" rowSpacing={3} columnSpacing={3} sx={{ mt: 5 }}>
        {props.pokemon.map(p => (
          <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>
        ))}
      </Grid>
      <Box sx={{my: 4}}>Total Exp: {props.exp}</Box>
      {winner}
    </Box>
  )
}

export default Pokedex;