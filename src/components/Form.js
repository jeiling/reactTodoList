import React, { Component } from 'react'
import { createTodo } from "../actions"
import { connect } from "react-redux"
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      active: false
    }
  }
  
  createTodo =()=> {
    let { text } = this.state
    if (!text) {
      return
    }
    this.props.createTodo(text)
    this.setState({
      text: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleKeyDown = (event) => {
    event.keyCode === 13 && this.createTodo()
  }

  handleClick = () => {
    this.setState({
      active: true
    })
  }

  onblur = () => {
    this.setState({
      active: false
    })
  }
  
  render() {
    let { active, text } = this.state
    let btnClass = active ? 'addBtn isActive' : 'addBtn'
    return (
      <div className='form'>
        <input
          placeholder="  What your doings today?" 
          onChange={this.handleChange}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          value={text}
          onBlur={this.onblur}
          >
        </input>
        <button
          onClick={this.createTodo} className={btnClass}>+</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTodo: text => {
      dispatch(createTodo(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(Form)