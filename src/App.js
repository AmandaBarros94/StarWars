import React from 'react';
import './App.css';
import FilterNumbers from './components/FilterNumbers';
import SearchPlanets from './components/SearchPlanets';
import Table from './components/Table';
import { ProviderPlanets } from './context/ContextPlanets';

function App() {
  return (

    <ProviderPlanets>
      <SearchPlanets />
      <FilterNumbers />
      <Table />

    </ProviderPlanets>

  );
}

export default App;
