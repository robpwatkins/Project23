import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent';

//  1.  Create another form and list, give it different inputs that save somewhere else
//    - cars, houses, or whatever
//
//  2.  Button for each item for deleting, clicking it deletes it from items array
//
//  3.  Create a div with name of car as well as fuel mileage
//      - needs another input with name="fuel-mileage"

//  4.  On click modify react logo animation

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      items: []
    }
  }

  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn});
  // }

  inputUpdate = event => {
    this.setState({input: event.target.value});
  }

  formSubmit = event => {
    event.preventDefault()
    console.log(this.state.items);
    this.setState({
      items: [...this.state.items, this.state.input],
      input: ''
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <form onSubmit={this.formSubmit}>
              <input value={this.state.input} onChange={this.inputUpdate}></input>
              <button>Submit</button>
            </form>
          <FirstComponent items={this.state.items} />
          {/* comments, babyyyyy */}
        </header>
      </div>
    );
  }
}

export default App;
