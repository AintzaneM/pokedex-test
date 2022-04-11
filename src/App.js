
import {  Switch, Routes, Route } from 'react-router-dom';
import './App.css';
import AllPokemon from './components/AllPokemon';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className="App">
      My Pokedex
      <div>
        
        <Switch>
          <Route exact path="/" render={(props) => <AllPokemon {...props} />} />
          <Route
            exact
            path="/:pokemonId"
            render={(props) => <PokemonCard {...props} />}
          />
        </Switch>

      </div>
      
    </div>
  );
}

export default App;
