import React, { Component } from 'react'
import importedNames from './Names'

export class SearchBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      names : importedNames
    }
  }

  searchFor= (event) => {
    const inputText = event.target.valuetoLowerCase()
    const filteredNames = importedNames.filter(name => {
      return name.toLowerCase().includes(inputText)
    })
    this.setState({
      names:filteredNames
    })
  }


  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p> matching names found: {this.state.names.length}</p>
        <form>
          <input type='text' onChange={(event) => this.searchFor(event)} placeholder='search names...'></input>
        </form>
        <div style={{margin: 'auto'}}>
          {this.state.names.map(name => {
            return <p key={name}>{name}</p>
          })}
        </div>
      </div>
    )
  }
}

export default SearchBar