import React, { useContext, useReducer, createContext } from "react";
import reducer from "./reducer";
export const NavBarContext = createContext();

const initialState = [
  { id: "home", nom: "Accueil", estDansHome: true, active: true },
  {
    id: "fonctionnalites",
    nom: "Fonctionnalités",
    estDansHome: true,
    active: false,
  },
  { id: "about", nom: "Qui sommes-nous ?", estDansHome: true, active: false },
  { id: "telecharger", nom: "Télécharger", estDansHome: true, active: false },
  { id: "contact", nom: "Contact", estDansHome: true, active: false },
];

const NavBarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NavBarContext.Provider value={{ state, dispatch }}>
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavBarStateValue = () => useContext(NavBarContext);

export default NavBarContextProvider;
