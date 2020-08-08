import React from 'react';

import "typeface-roboto"
import GlobalState from './components/GlobalState'
import AppContainer from "./components/AppContainer"
// import './App.css';

function App() {
  return (
    <GlobalState>
      <AppContainer />
    </GlobalState>
  );
}

export default App;
