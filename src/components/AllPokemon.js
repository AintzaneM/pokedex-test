import React, { useState, useEffect} from 'react'
import { getPokemons } from '../services/pokemons'
import PokemonCard from './PokemonCard'
import SearchBar from './SearchBar';
import axios from 'axios';

const AllPokemon = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons().then((data) => {
            setPokemons(data);
        })
    }, [])

    

    

    // console.log("pokeeemons",pokemons)
    // console.log("objeeect",Object.entries(pokemons)[3] &&  Object.entries(pokemons)[3][1])
  return (
    <div>
        <SearchBar pokemons={pokemons}> </SearchBar>

        {/* {Object.entries(pokemons)[3] && 
            Object.entries(pokemons)[3][1].map ((pokemon, index) => {
            return <PokemonCard key = {index} {...pokemon} id={index + 1} />
        })} */}
       
        AllPokemon in here
        
    </div>
  )
}

export default AllPokemon