import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

const Pokecard = (props) => {
  let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
  return (
    <Grid item lg={3} md={4} sm={6}>
      <Card className="hover:scale-105 transition-all pokecard-card" variant="outlined" sx={{ p: 4 }}>
        <div className="pokecard-name">{props.name}</div>
        <img className="pokecard-image" src={imgSrc} alt={props.name} />
        <div className="pokecard-type">Type: {props.type}</div>
        <div className="pokecard-exp">Exp: {props.base_experience}</div>
      </Card>
    </Grid>
  )
}

export default Pokecard