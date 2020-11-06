/* React */
import React from 'react';
/* MyTypes */
import { GlobalState } from '@/types';
/* reducer */
import { reducer } from '@/src/Reducer';

const initialState: GlobalState = {name: ""};

export const Store = React.createContext<GlobalState | any>(initialState);

export const StoreProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};