import React, { Component } from 'react'
import {
  addTodo,
  toggleVisibility,
  toggleCompleted,
} from './actions/todoActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class TodoList extends Component {
  state = {
    todoText: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onCheck = todoId => {
    this.props.toggleCompleted(todoId)
  }

  addTodo = e => {
    e.preventDefault()
    console.log('Adding todo')
    this.props.addTodo(this.state.todoText)
    this.setState({
      todoText: '',
    })
  }

  toggleVisibility = () => {
    this.props.toggleVisibility()
  }

  render() {
    let todos

    if (this.props.todos.onlyShowCompleted) {
      todos = this.props.todos.todos.filter(todo => todo.isCompleted === true)
    } else {
      todos = this.props.todos.todos
    }

    return (
      <div>
        <h1>TodoList</h1>
        <button onClick={this.toggleVisibility}>Show Completed</button>
        <form onSubmit={this.addTodo}>
          <input
            name="todoText"
            value={this.state.todoText}
            type="text"
            onChange={this.onChange}
            placeholder="todo text"
          />
          <button className="add">Add Todo</button>
        </form>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.todoText}
              <input type="checkbox" onChange={() => this.onCheck(todo.id)} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  todos: state.todos,
})

export default connect(
  mapStateToProps,
  { addTodo, toggleVisibility, toggleCompleted }
)(TodoList)
