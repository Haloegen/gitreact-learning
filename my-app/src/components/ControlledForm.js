import React, { Component } from 'react'

export class ControlledForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       category: 'website',
       comments: ''
    }
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleCategory = (event) => {
    this.setState({
      category: event.target.value
    })
  }

  handleComment = (event) => {
    this.setState({
      comments: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div><label htmlFor='id-name'>Your name</label>
          <input value={this.state.name} onChange={this.handleNameChange} id='id-name' name='name' type='text'/>
          </div>
          <div>
          <label htmlFor='id-category'>Your Category:</label>
          <select id='id-category' value={this.state.category} onChange={this.handleCategory} name='category'>
            <option value='website'>Website issue</option>
            <option value='order'>Order issue</option>
            <option value='general'>General inquiry</option>
          </select>
          </div>
          <div>
            <label htmlFor='id-comments'>
              Comments:
            </label>
            <textarea
            id='id-comments' value={this.state.comments} name='comments' onChange={this.handleComment}></textarea>
          </div>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}


export default ControlledForm