const INITIAL_STATE = {
  todos: [],
};

export function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_TODOS":
      return {
        todos: action.todos,
      };

    case "ADD_TODO":
      return {
        todos: [...state.todos, action.todo],
      };

    case "UPDATE_TODO":
      return {
        todos: state.todos.map((todo) => (todo.id === action.todo.id ? action.todo : todo)),
      };

    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.todoId),
      };

    default:
      return state;
  }
}
