import React, { useState, useContext, useEffect } from 'react';
// make sure to use https
import useFetch from './useFetch';
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
console.log(API_ENDPOINT);
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('austin powers');

  const { loading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ movies, loading, error, setQuery, query }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };