import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Link, CircularProgress, Button } from "@mui/material";
import { toFirstCharUppercase } from '../constants';

const PokemonCard = (props) => {
  console.log("prrrrooops",props)

  const {match, history} = props;
  const {params} = match;
  const {pokemonId} = params;
  const [pokemon, setPokemon] = useState(undefined);


  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    .then(function(response) {
      console.log(response)
      const {data} = response;
      setPokemon(data);
    })
    .catch(function(error) {
      setPokemon(false);
    })
  }, [pokemonId]);


  const generatePokemon = (pokemon) => {
    console.log(pokemon)
    const {name, id, species, height, weight, types, sprites} = pokemon;
    // const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const {front_default} = sprites;

    return (
      <>
      <div>
        {`${id}.`} {toFirstCharUppercase(name)}
            <img src={front_default} alt="" />
      </div>
  
      <div>
      <img style={{ width: "150px", height: "150px" }} src={front_default} alt=""/>
      <p>Pokemon info</p>
      <div>
        {"Species:"}
        <Link href={species.url}>{species.name}</Link>
      </div>
      
      <div>
        <p>Height : {height}</p>
        <p>Weight : {weight}</p>
      </div>
  
      <div>
        <p>Types:</p>
        {types.map((typeInfo) => {
          console.log(typeInfo)
          const {type} = typeInfo;
          const {name} = type;
          return (
           <div key= {name}>{`${name}`}</div>
           )
        })}
      </div>
        </div>
        </>
    )
  }
  

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemon(pokemon)}
      {pokemon === false && <p> Pokemon not found</p>}

      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => history.push("/")}>
          back to pokedex
        </Button>
      )}
    </>
  );
};

  



export default PokemonCard