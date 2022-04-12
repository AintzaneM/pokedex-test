import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, CircularProgress } from "@mui/material";
import { toFirstCharUppercase } from '../constants';
import styled from 'styled-components';

const PokemonCard = (props) => {
  console.log("prrrrooops", props)

  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);


  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        console.log(response)
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      })
  }, [pokemonId]);


  const generatePokemon = (pokemon) => {
    console.log(pokemon)
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const { front_default } = sprites;

    return (
      <ContainerTop>
        <HeaderPokemonCard>
          <img style={{ width: "150px", height: "150px" }} src={front_default} alt="" />
        </HeaderPokemonCard>
        

        <TextPokemonCard>
          {/* <img style={{ width: "150px", height: "150px" }} src={front_default} alt="" /> */}
          <p>POKEMON INFO</p>
          
            {"Name: "}
            <Link href={species.url}>{species.name}</Link>
          

          {/* <div> */}
            <p>Height : {height}</p>
            <p>Weight : {weight}</p>
          {/* </div>

          <div> */}
            <p>Types:</p>
            {types.map((typeInfo) => {
              console.log(typeInfo)
              const { type } = typeInfo;
              const { name } = type;
              return (
                <div key={name}>{`${name}`}</div>
              )
            })}
          {/* </div> */}
        </TextPokemonCard>
      </ContainerTop>
    )
  }
  

  return (
    <ContentPokemonCard>
      {/* {pokemon === undefined && <CircularProgress />} */}
      {pokemon !== undefined && pokemon && generatePokemon(pokemon)}
      {pokemon === false && <p> Pokemon not found</p>}

      {pokemon !== undefined && (
        <Button onClick={() => history.push("/")}>
          back to pokedex
        </Button>
      )}
    </ContentPokemonCard>
  );
};

const ContainerTop = styled.div`
background-color: white;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border-radius: 10px;
`

const ContentPokemonCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 20%;

 
`

const HeaderPokemonCard = styled.div`
position: relative;
height: 300px;

background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
border-bottom-left-radius: 50% 20%;
border-bottom-right-radius: 50% 20%;
width: 100%;
height: 20%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`

const TextPokemonCard = styled.div`
width: 50%;
background-color: white;
color: black;
position: relative;
padding: 20px;

`

const Button = styled.button`
margin: 20px auto;
background-color: yellow;
font-size: 15px;
padding: 0px 24px;
height: 56px;
border-radius: 10px;
display:flex;
align-items: center;
cursor: ponter;
justify-content: center;
letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;
// background: rgb(249, 249, 249);
border: none;
// color: rgb(0, 0, 0)
&:hover {
  background: rgba(219,180,22,0.79)


`
export default PokemonCard