import { todoService } from "../../services/todo-service";

export function loadTodos(loggedInUserEmail) {
  return async (dispatch) => {
    try {
      const todos = await todoService.query(loggedInUserEmail);
      dispatch({ type: "SET_TODOS", todos });
    } catch (err) {
      console.log("err:", err);
    }
  };
}

export function editTodo(todo) {
  return async (dispatch) => {
    try {
      if (todo.id) {
        await todoService.update(todo);
        dispatch({ type: "UPDATE_TODO", todo });
      } else {
        const newTodo = await todoService.add(todo);
        dispatch({ type: "ADD_TODO", todo: newTodo });
      }
    } catch (err) {
      console.log("err:", err);
    }
  };
}

export function removeTodo(todoId) {
  return async (dispatch) => {
    try {
      console.log('todoId',todoId)
      await todoService.remove(todoId);
      dispatch({ type: "REMOVE_TODO", todoId });
    } catch (err) {
      console.log("err:", err);
    }
  };
}
