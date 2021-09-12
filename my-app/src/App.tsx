import React from 'react';
import './App.css';
import Todos from "./components/Todos"

function App() {
  return (
    <div className="App">
      <Todos items={["Learn React", "Learn TS", "Drink Water"]}/>
    </div>
  );
}

export default App;
