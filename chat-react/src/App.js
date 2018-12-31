import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/MessageList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageList />
      </div>
    );
  }
}

export default App;
