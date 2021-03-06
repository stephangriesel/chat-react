import React from "react";

/* class Message extends React.Component {
  render() {
    return (
      <div>
        <div className="message">{this.props.username}</div>
        <div className="message-text">{this.props.text}</div>
      </div>
    );
  }
}*/


function Message (props) {

      return (
        <div>
          <div className="message">{props.username}</div>
          <div className="message-text">{props.text}</div>
        </div>
      );

  }


export default Message;
