import React from 'react';
import './App.css';
import FilterNumbers from './components/FilterNumbers';
import SearchPlanets from './components/SearchPlanets';
import Table from './components/Table';
import { ProviderPlanets } from './context/ContextPlanets';

function App() {
  return (

    <div className="App">
      <ProviderPlanets>
        <h2 className="starwars">STAR WARS PLANETS</h2>
        <div className="headTable">
          <SearchPlanets />
          <FilterNumbers />
        </div>
        <Table />
      </ProviderPlanets>
    </div>

  );
}

export default App;
