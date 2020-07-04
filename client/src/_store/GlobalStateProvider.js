import React, { createContext } from 'react';
import useGlobalState from './UseGlobalState';

export const Context = createContext({});

const GlobalStateProvider = ({ children }) => {
  return (
    <Context.Provider value={useGlobalState()}>{children}</Context.Provider>
  );
};

export default GlobalStateProvider;
