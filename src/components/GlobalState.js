import React, { useReducer } from "react";

export const GlobalContext = React.createContext();

const initialState = {
  searchState: "home",
  searchResult: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "setCurrentVideoSnippet":
          return {
            ...state,
            currentVideoSnippet: action.snippet
          };
    
        case "setRelatedVideos": {
          return {
            ...state,
            relatedVideos: action.snippet
          };
        }
        case "setSnackbarMsg": {
          return {
            ...state,
            snackbarMsg: action.snippet
          };
        }
        case "setThemeSelectValue": {
          return {
            ...state,
            themeSelectValue: action.snippet
          };
        }
        case "setSearchState": {
          return {
            ...state,
            searchState: action.snippet
          };
        }
        case "setSearchResult": {
          return {
            ...state,
            searchResult: action.snippet
          };
        }
        case "setMenuOpen": {
          return {
            ...state,
            menuOpen: action.snippet
          };
        }
        default:
          return state;
      }
}

const GlobalState = (props) => {
  const globalState = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={globalState}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
