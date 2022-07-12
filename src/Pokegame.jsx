import React from 'react';
import Pokedex from './Pokedex'
import Container from '@mui/material/Container';

const Pokegame = (props) => {
  let player1 = [];
  let player2 = [...props.pokemon];
  let totalExp = 0;
  let exp1 = 0;
  let exp2 = 0;
  let winner;

  for (let t of player2) {
    totalExp = totalExp + t.base_experience
  }

  while (player1.length < player2.length) {
    let randomChoice = Math.floor(Math.random() * player2.length)

    player1.push(player2[randomChoice])
    player2.splice(randomChoice, 1)
  }

  for (let t of player1) {
    exp1 += t.base_experience
  }
  for (let t of player2) {
    exp2 += t.base_experience
  }

  return (
    <Container>
      <Pokedex pokemon={player1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={player2} exp={exp2} isWinner={exp1 < exp2} />
    </Container>
  )
}

Pokegame.defaultProps = {
  pokemon: [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]
}

export default Pokegame