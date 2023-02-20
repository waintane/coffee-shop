import React from 'react';
import './App.scss';
import Entete from './composantes/UI/Entete';
import {Route, Routes} from "react-router-dom";
import Accueil from './composantes/pages/Accueil';

function App() {
  return (
    <div className="App">
      <Entete/>

      <Routes>
        <Route path="/coffee-shop" element = {<Accueil/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
