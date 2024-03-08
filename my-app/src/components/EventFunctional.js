import React from 'react'

function EventFunctional() {
  function clickHandler() {
    console.log("click the functional button")
  }
  return (
    <div>
      <button onClick={clickHandler}>click me - i'm a functional component</button>
    </div>
  )
}

export default EventFunctional