import React, { useContext, useEffect, useReducer } from 'react'

export const AuthStateContext = React.createContext({})

const initialState = { user: {} }

const ActionType = {
  SetDetails: 'setAuthDetails',
  RemoveDetails: 'removeAuthDetails'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SetDetails:
      return {
        user: action.payload.user
      };
    case ActionType.RemoveDetails:
      return {
        user: initialState.user
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const AuthProvider = ({ children }) => {
  let localState = null;
  if (typeof localStorage !== 'undefined' && localStorage.getItem('userInfo')) {
    localState = JSON.parse(localStorage.getItem('userInfo') || '');
  }
  const [state, dispatch] = useReducer(reducer, localState || initialState);

  if (typeof localStorage !== 'undefined') {
    useEffect(() => {
      localStorage.setItem('userInfo', JSON.stringify(state));
    }, [state]);
  }
  return (
    <AuthStateContext.Provider value={[state, dispatch]}>
      {children}
    </AuthStateContext.Provider>
  );
};

// useContext hook - export here to keep code for global auth state
// together in this file, allowing user info to be accessed and updated
// in any functional component using the hook
export const useAuth = () => useContext(AuthStateContext);