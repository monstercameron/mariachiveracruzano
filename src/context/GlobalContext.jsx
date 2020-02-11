import React, { useState } from "react";
export const GlobalContext = React.createContext();
const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    lang: "en"
  });
//   console.log(state)
  return (
    <GlobalContext.Provider value={[state, setState]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
