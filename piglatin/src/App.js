import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Piglatin from './piglatin';
import Input from './Input';
import './pigstyle.css';
import Piglogo from './piglogo.png';



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
        <div className="logo">
          <img src="http://cliparts.co/cliparts/8cx/nLM/8cxnLMGdi.png" width="230" height="155" />
        </div>
        <h1>Piglatinify</h1>
        <style>
@import url('https://fonts.googleapis.com/css?family=Leckerli+One');
</style>
        <Input submit={this.takeInput.bind(this)}/>
        <Piglatin greeting={this.state.greeting}/>
      </div>
    );
  }
}
export default App;
