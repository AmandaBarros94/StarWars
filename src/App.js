import React from 'react';
import './App.css';
import SearchPlanets from './components/SearchPlanets';
import Table from './components/Table';
import { ProviderPlanets } from './context/ContextPlanets';

function App() {
  return (

    <ProviderPlanets>
      <SearchPlanets />
      <Table />

    </ProviderPlanets>

  );
}

export default App;
