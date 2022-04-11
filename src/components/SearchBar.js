// import React, {useState, useEffect} from 'react'
// import { getPokemons } from '../services/pokemons'
// import AllPokemon from './AllPokemon'
// import PokemonCard from './PokemonCard'
// import axios from 'axios'
// import { toFirstCharUppercase} from "../constants"
// import { CircularProgress } from '@material-ui/core'

// const SearchBar = (props) => {
//     // console.log(pokemons)
//     // const [pokemons, setPokemons] = useState([])
//     const { history } = props;
//     const [pokemonData, setPokemonData] = useState({})
//     const [filter, setFilter] = useState("");
    
//     useEffect(() => {
//         axios
//           .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
//           .then(function (response) {
//             const { data } = response;
//             const { results } = data;
//             const newPokemonData = {};
//             results.forEach((pokemon, index) => {
//                 // console.log(pokemon)
//               newPokemonData[index + 1] = {
//                 id: index + 1,
//                 name: pokemon.name,
//                 sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
//                     index + 1}.png`,
//               };
//             });
//             setPokemonData(newPokemonData);
//             // console.log(newPokemonData)
//           });
//       }, []);

//     const inputHandler = (event) => {
//         event.preventDefault()
        
//         // console.log("inputloooooower",event.target.value)
//         setFilter(event.target.value);

//     }

//     const getPokemonCard = (pokemonId) => {
//         const { id, name, sprite } = pokemonData[pokemonId];
//         return (
//           <div  key={pokemonId}>
//             {console.log(id)}
//             <div onClick={() => history.push(`/${id}`)}>
//               <div>
//               <img src={sprite} style={{ width: "130px", height: "130px" }}/>
//               </div> 
//               <div>
//                 <div>{`${id}. ${toFirstCharUppercase(name)}`}</div>
//               </div>
//             </div>
//           </div>
//         );
//       };

    
//   return (
//     <div>
//         <input
//         type = "search"
//         onChange={inputHandler}
//         value= {filter}
//         placeholder='Search...'
        
//         />
//         <div>
//         {pokemonData ? (
//         <div container spacing={2} >
//           {Object.keys(pokemonData).map(
//             (pokemonId) =>
//               pokemonData[pokemonId].name.includes(filter) &&
//               getPokemonCard(pokemonId)
              
//           )}
//         </div>
//       ) : (
//         <CircularProgress/>
//       )}

//         </div>

//     </div>
//   )
// }

// export default SearchBar