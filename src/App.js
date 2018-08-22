import React, { Component } from 'react'

import store from './store'
import { Provider } from 'react-redux'
import './App.css'
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoList />
        </div>
      </Provider>
    )
  }
}

export default App
