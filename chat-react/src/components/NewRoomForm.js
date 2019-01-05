import React from 'react'

class NewRoomForm extends React.Component {

    constructor() {
        super()
        this.state = {
            roomName:''
        }
    }

    handleChange(e) {
        this.setState({
            roomName: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
    }

  render() {
    return (
      <div className="new-room-form">
        <form onSubmit={this.handleSubmit}>
            <input 
            onChange={this.handleChange}
            type="text"
            placeholder="newRoomForm"
            required
            />
            <button id="create-room-btn"></button>
        </form>
      </div>
    )
  }
}

export default NewRoomForm
