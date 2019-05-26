import React, { Component } from 'react'
// 輸入 connect ，讓這個組件能夠回傳被 connect 重新包裹過的新組件
import { connect } from "react-redux";
import "./Title.css";

class Title extends Component {
  render() {
    return (
      <h2>My<span className='todosNumber'>Todos {this.props.todos.length}</span></h2>
    )
  }
}

// 提供一個 method 讓我們能夠取得 store 裡的 state 資料
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

// 經過包裹，就能在該組建裡面調用 store 裡的 state
export default connect(mapStateToProps)(Title)
