import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toFirstCharUppercase } from "../constants"
import styled from 'styled-components';


const AllPokemon = (props) => {
  const { history } = props;
  const [pokemonData, setPokemonData] = useState({})
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
          };
        });
        setPokemonData(newPokemonData);
      });
  }, []);

  const inputHandler = (event) => {
    event.preventDefault()
    setFilter(event.target.value);

  }

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];
    return (
      <WrapPokemon key={pokemonId}>
        <div onClick={() => history.push(`/${id}`)}>
          <ContainerCardPokemon>
            <img src={sprite} style={{ width: "150px", height: "150px" }} alt="pokemon" />
            <br />
            <p >{`${id}. ${toFirstCharUppercase(name)}`}</p>
          </ContainerCardPokemon>
        </div>
      </WrapPokemon>
    );
  };
  return (
    <ContainerPokemon>
      <input
        type="search"
        onChange={inputHandler}
        value={filter}
        placeholder='Find your Pokemon...'
      />
      <ContentCardPokemon  >
        {Object.keys(pokemonData).map(
          (pokemonId) =>
            pokemonData[pokemonId].name.includes(filter) &&
            getPokemonCard(pokemonId)
        )}
      </ContentCardPokemon>
    </ContainerPokemon>
  )
}

export default AllPokemon


const ContainerPokemon = styled.div`
color: black;
padding: 0 0 26px;
margin: 30px 50px;
display: flex;
justify-content: center;
flex-direction: column;
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 50px;
  border-radius: 20px;
}
`;

const ContainerCardPokemon = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
justify-content: center;
`;

const ContentCardPokemon = styled.div`
display: grid;
grid-gap: 25px;
gap: 30px;
grid-template-columns: repeat(6, minmax(0, 1fr));

@media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (max-width: 480px) {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
`;

const WrapPokemon = styled.div`
padding-top: 56.25;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow: hidden;
position:relative;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 3px solid rgba(249, 249, 249, 0.1);
background-color: white;
&:hover {
  box-shadow: -2px 1px 24px 8px rgba(219,180,22,0.79);
  -webkit-box-shadow: -2px 1px 24px 8px rgba(219,180,22,0.79);
  -moz-box-shadow: -2px 1px 24px 8px rgba(219,180,22,0.79);
    // box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    //   rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
};
img {
    inset: 0px;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 1;
    position: relative;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top:  0;    
    padding: 5px;

}
`;

