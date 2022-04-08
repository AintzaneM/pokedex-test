import React from 'react'

const PokemonCard = (props) => {
  // console.log(props.id)
  return (
    <div>
      <p>{props.id}</p>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
      />
  
      <p>{props.name}</p>
      </div>
    
  )
}

export default PokemonCard