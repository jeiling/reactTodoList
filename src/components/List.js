import React, { Component } from 'react'
import { connect } from "react-redux"
import { removeTodo } from "../actions"
import './List.css'

class List extends Component {
  render() {
    return (
      <div className='item'>
        {
          this.props.todos.map((todo, index) => {
            return (
              <span 
                className='todo'
                key={todo.id}
                onClick={() => this.props.removeTodo(todo.id)}
              >
                {todo.text}
              </span>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => {
      dispatch(removeTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
