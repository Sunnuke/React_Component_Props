import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersonCard from "./components/PersonCard";

const p1 = {"firstName": "John", "lastName": "Wick", "age": 45, "hairColor": "Black"};
const p2 = {"firstName": "Will", "lastName": "Smith", "age": 50, "hairColor": "Black"};
const p3 = {"firstName": "Millard", "lastName": "Fillmore", "age": 88, "hairColor": "Brown"};
const p4 = {"firstName": "Maria", "lastName": "Smith", "age": 62, "hairColor": "Red"};

function App() {
  return (
    <div className="App">
      <PersonCard ln1={p1.lastName} fn1={p1.firstName} a1={p1.age} hc1={p1.hairColor} />

      <PersonCard ln1={p2.lastName} fn1={p2.firstName} a1={p2.age} hc1={p2.hairColor} />
      <PersonCard ln1={p3.lastName} fn1={p3.firstName} a1={p3.age} hc1={p3.hairColor} />
      <PersonCard ln1={p4.lastName} fn1={p4.firstName} a1={p4.age} hc1={p4.hairColor} />

    </div>
  );
}

export default App;
