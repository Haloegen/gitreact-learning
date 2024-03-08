import React, { Component } from 'react'

export class EventsClass extends Component {
  clickHandle() {
    console.log("log class click")
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandle}>
          click me - I'm a class component
        </button>
      </div>
    )
  }
}

export default EventsClass