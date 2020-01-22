import React from 'react';
import './App.css';
import TextBox from "./component/TextBox"
import List from "./component/List"
import Filter from "./component/Filter"

function App() {
  return (
    <div className="App">
    <h1> ___part 1___ </h1>
    <List/>
    <h1> ___part 2____ </h1>
    <TextBox/>
    <h1> ___part 3___ </h1>
    <Filter/>
    </div>
  );
}

export default App;
