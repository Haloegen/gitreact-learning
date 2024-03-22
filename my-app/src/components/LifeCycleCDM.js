import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCycleCDMChild'

export class LifeCycleCDM extends Component {
  constructor(props) {
    console.log('constructor called')
    super(props)
  
    this.state = {
       data: 'loading'
    }
  }
  getData() {
    console.log('getData() called')
    setTimeout(() => {
      console.log('data is being collected')
      this.setState({
        data: 'loaded'
      })
    }, 3000)
  }

  componentDidMount() {
    console.log('component is being mounted')
    this.getData()
  }

  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <LifeCyclesCDMChild/>
      </div>
    )
  }
}

export default LifeCycleCDM