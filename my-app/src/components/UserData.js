import React from 'react'

function UserData(props) {
  return (
    <div>
      <h1>
    {props.isLoaded ? 'Date Loaded' : 'Loading...'}</h1></div>
  )
}

export default UserData