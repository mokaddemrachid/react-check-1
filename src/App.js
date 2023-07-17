// import './App.css';
import Cards from "./components/cards";
import NavScrollExample from "./components/navbar"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavScrollExample />
        <Cards />
      </header>
    </div>
  );
}

export default App;
