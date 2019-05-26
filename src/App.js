import React, { Component } from 'react'
import Title from './components/Title'
import Form from './components/Form'
import List from './components/List'
import  './App.css';

// 輸入 createStore 
import { createStore } from 'redux'
// 輸入我們自己寫的 reducer
import todoReducer from './reducer/index'
// 輸入 Privider
import { Provider } from "react-redux";

// 調用 createStore, 加入我們自己寫的 reducer 建立 store 
let store = createStore(
  todoReducer,
  // redux 的 chrome 開發工具
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export default class App extends Component {
  render() {
    return (
      // 將建立好的 store 交給 Provider 使底下所有組件皆能取得 store 裡的 state
      <Provider store={store}>
        <div className='todolist'>
          <Title/>
          <Form/>
          <List/>
        </div>
      </Provider>
    )
  }
}
