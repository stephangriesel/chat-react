import React from 'react'

class NewRoomForm extends React.Component {
  render() {
    return (
      <div className="new-room-form">
        <form>
            <input 
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
