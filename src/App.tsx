import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
// import { List } from './components/List';

function App() {
  return (
    <div className="App">
      {/* <List message = {"Hello"}/>
      <List message = {"This is component"} /> */}
      <Accordion status = {true}/>
      <Accordion status = {false} />
    </div>
  );
}

export default App;
