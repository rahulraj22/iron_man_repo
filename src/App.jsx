import React, { Component } from "react";
import ComponentB from './components/componentB'
import ComponentC from './components/componentC'
import './App.css';

const App = () => {
  return(
    <div className="App">
      <ComponentB />
      <ComponentC />
    </div>
  )
}
export default App;