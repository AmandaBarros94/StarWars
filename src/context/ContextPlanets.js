import PropTypes from 'prop-types';
import React, { createContext, useState, useCallback, useEffect } from 'react';
import fetchListPlanets from '../services/FetchApi';

const ContextPlanets = createContext();

export const ProviderPlanets = ({ children }) => {
  const [data, setData] = useState([]);

  const responseApi = useCallback(async () => {
    const response = await fetchListPlanets();
    setData(response);
  }, [setData]);

  useEffect(() => {
    responseApi();
  }, [responseApi]);
  console.log(data);
  return (
    <ContextPlanets.Provider
      value={ {
        data,
        setData,
      } }
    >
      {children}
    </ContextPlanets.Provider>
  );
};

ProviderPlanets.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
export default ContextPlanets;
