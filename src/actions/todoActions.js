import { ADD_TODO, TOGGLE_COMPLETED, TOGGLE_VISIBILITY } from './types'

export const addTodo = todoText => {
  return {
    type: ADD_TODO,
    payload: {
      todoText,
      id: Date.now(),
      isCompleted: false,
    },
  }
}

export const toggleVisibility = () => {
  return {
    type: TOGGLE_VISIBILITY,
  }
}

export const toggleCompleted = todoId => {
  return {
    type: TOGGLE_COMPLETED,
    payload: {
      id: todoId,
    },
  }
}
