import React, { Component } from 'react';

class Input extends Component {
  constructor(props){
    super(props)
    this.state = {
      userIn: ''
    }
  }

  handleChange(e){
    // console.log('event', e.target.value);
    let newUserIn  = e.target.value
    this.setState({userIn: newUserIn})
  }

  submitHandler(e){
    e.preventDefault()
    console.log('STATE', this.state);
    this.props.submit(this.state.userIn)
  }

  render(){
    console.log(this.props)
    return(
      <form onSubmit={this.submitHandler.bind(this)}>
        <input type='text' name='userIn' onChange={this.handleChange.bind(this)} />
        <input type='submit' value='Enter' />
      </form>
    )
  }
}

export default Input
