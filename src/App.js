import { Switch, Route } from 'react-router-dom';
import AllPokemon from './components/AllPokemon';
import Header from './components/Header';
import PokemonCard from './components/PokemonCard';


function App() {
  return (
    <div className="App">
      <Header />
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
