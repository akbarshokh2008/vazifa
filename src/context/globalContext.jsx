import { createContext, useReducer, useState } from "react";
export const GlobalContext = createContext();
const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOG_IN":
      return { ...state, user: payload };
    case "LOG_OUT":
      return { ...state, user: null };
    case "AUTH_CHANGE": {
      return { ...state, isAuthChange: true };
    }
    default:
      return state;
  }
};

function GlobalContextProvider({ children }) {
  const { count, setCount } = useState(0);
  const changeCount = (newCount) => {
    setCount(newCount);
  };
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    products: [],
    total: 0,
    isAuthChange: false,
  });
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
