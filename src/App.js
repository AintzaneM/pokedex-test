
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import './App.css';
import AllPokemon from './components/AllPokemon';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className="App">
      My Pokedex
      <div>
        <Router>
          <Routes>
          
              <Route exact path="/" 
              element={<AllPokemon/>}
              render={(props) => <SearchBar {...props} />}/>

              <Route exact path="/:pokemonId" 
              // element={<AllPokemon/>}
              render={(props) => <PokemonCard {...props} />}/>  
         
          </Routes>
        </Router>
      {/* <AllPokemon exact path="/" element={(props) => <SearchBar {...props} />}/> */}
      
        
      </div>
      
    </div>
  );
}

export default App;
