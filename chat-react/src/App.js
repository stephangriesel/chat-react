import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit';
import './App.css';
import MessageList from './components/MessageList';

import { tokenUrl, instanceLocator } from './config';

class App extends Component {

  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'sgriesel',
      tokenProvider: new Chatkit.TokenProvider({
        url:tokenUrl
      })

    })

    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: 19376685,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        }
      })
    })
  }
  render() {
    return (
      <div className="App">
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
