import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit';
import './App.css';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';

import { tokenUrl, instanceLocator } from './config';
import RoomList from './components/RoomList';


class App extends Component {

  constructor() {
    super()
    this.state = {
      messages: [],
      joinableRooms: [],
      joinedRooms: []
    }
    this.sendMessage = this.sendMessage.bind(this)
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
      this.currentUser = currentUser;

      this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(err => console.log('error on joinableRooms: ',err))

      this.currentUser.subscribeToRoom({
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
    .catch(err => console.log('error on joinableRooms: ',err))
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: 19376685
    })
  }

  render() {
    return (
      <div className="App">
        <RoomList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
        <MessageList messages={this.state.messages}/>
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
