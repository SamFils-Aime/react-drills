import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login"
import Image from "./components/Image"
import NewTask from "./components/NewTask"
import List from "./components/List"

class App extends Component {
  constructor (){
    super()
    this.state = {
      List: []
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }
  handleAddTask(Task){
    this.setState({ List: [...this.state.List,Task]})
  }
  render (){
  return (
    <div className="App">
      <h1>_____part 1____</h1>
      <Login/>
      <h1>_____part 2____</h1>
      <Image url= {"https://http.cat/40"}/>
      <h1>_____part 3___</h1>
      <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.List} />
    </div>
  );
}
}

export default App;
