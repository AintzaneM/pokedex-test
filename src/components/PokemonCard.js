import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "@mui/material";
import { toFirstCharUppercase } from '../constants';
import styled from 'styled-components';

const PokemonCard = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);


  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      })
  }, [pokemonId]);


  const generatePokemon = (pokemon) => {
    const { species, height, weight, types, sprites } = pokemon;
    const { front_default } = sprites;

    return (
      <ContainerTop>
        <HeaderPokemonCard>
          <img style={{ width: "150px", height: "150px" }} src={front_default} alt="" />
        </HeaderPokemonCard>
        <TextPokemonCard>
          <p><u><strong>POKEMON INFO</strong></u></p>
          <p><strong>Name:</strong> {<Link href={species.url}>{toFirstCharUppercase(species.name)}</Link>}</p>
          <p><strong>Height:</strong> {height}</p>
          <p><strong>Weight:</strong> {weight}</p>
          <p><strong>Types:</strong></p>
          {types.map((typeInfo) => {
            const { type } = typeInfo;
            const { name } = type;
            return (
              <p key={name}>{`${name}`}</p>
            )
          })}
        </TextPokemonCard>
      </ContainerTop>
    )
  }


  return (
    <ContentPokemonCard>
      {pokemon !== undefined && pokemon && generatePokemon(pokemon)}
      {pokemon === false && <p> Pokemon not found</p>}
      {pokemon !== undefined && (
        <Button onClick={() => history.push("/")}>
          <strong>back</strong>
        </Button>
      )}
    </ContentPokemonCard>
  );
};

export default PokemonCard

const ContainerTop = styled.div`
background-color: white;
width: 50%;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border-radius: 10px;
`;

const ContentPokemonCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 10%;
font-size: 20px; 
`;

const HeaderPokemonCard = styled.div`
position: relative;
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
`;

const TextPokemonCard = styled.div`
color: black;
font-size: 20px;
position: relative;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
@media (min-width: 320px) and (max-width: 480px) {
  font-size: 16px;
}

@media (min-width: 0) and (max-width: 319px) {
  font-size: 10px;
}
`;

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
border: none;
width: 50%;
cursor: pointer;
@media (min-width: 320px) and (max-width: 480px) {
  font-size: 16px;
}
@media (min-width: 0) and (max-width: 319px) {
  font-size: 10px;
}
&:hover {
  background-color: #414141;
  color: white;
}
`;
