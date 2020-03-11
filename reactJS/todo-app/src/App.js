import React from 'react';
import './App.css';

class App extends React.Component {
  state = { 
    input: '',
    text: [] 
  }
  updateInput = event => {
    this.setState({input: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault();
    console.log(this.state.text);
    this.setState({
      text: [ ...this.state.text, this.state.input ],
      input: ''
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>poop</h1>
          <form onSubmit={this.formSubmit}>
            <input value={this.state.input} onChange={this.updateInput}></input>
            <button>Click Me</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
