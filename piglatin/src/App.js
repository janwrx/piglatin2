import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import piglatin from './piglatin';
import Input from './Input';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: 'hello'
    }
  }

  takeInput(newInput) {
    this.setState({greeting: newInput})
  }

  render() {
    return (
      <div className="App">
        <h1>Inputs and Outputs</h1>
        <Input submit={this.takeInput.bind(this)}/>
        <piglatin greeting={this.state.greeting}/>
      </div>
    );
  }
}
export default App;
