import { ADD_TODO, TOGGLE_VISIBILITY, TOGGLE_COMPLETED } from '../actions/types'

const initialState = {
  todos: [],
  onlyShowCompleted: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      }
    case TOGGLE_VISIBILITY:
      return {
        ...state,
        onlyShowCompleted: !state.onlyShowCompleted,
      }
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(
          todo =>
            todo.id === action.payload.id
              ? {
                  ...todo,
                  isCompleted: !todo.isCompleted,
                }
              : todo
        ),
      }
    default:
      return state
  }
}
