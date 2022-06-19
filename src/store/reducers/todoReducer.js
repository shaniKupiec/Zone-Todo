
const INITIAL_STATE = {
    todos: [],
}

export function todoReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_TODOS':
            return {
                todos: action.todos
            }

        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }

        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.todoId)
            }

        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => todo._id === action.todo._id ? action.todo : todo)
            }

        default:
            return state;
    }
}