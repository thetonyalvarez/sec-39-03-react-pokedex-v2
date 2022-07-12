import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

const Pokecard = (props) => {
  let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
  return (
    <Card className="hover:scale-105 transition-all pokecard-card" variant="outlined" sx={{ p: 4 }}>
      <CardMedia
        component="img"
        image={imgSrc}
        alt={props.name}
      />
      <CardContent>
        <Typography className="pokecard-name" gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Chip label={props.type} className="pokecard-type" sx={{ mb: 2 }}></Chip>
        <Typography className="pokecard-exp"  variant="p" component="div">
          Exp: {props.base_experience}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Pokecard