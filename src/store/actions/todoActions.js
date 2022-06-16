import { todoService } from "../../services/todo-service";

export function loadRobots() {
  return async (dispatch) => {
    try {
      const todos = await todoService.query();
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
        const newTodo = await todoService.add(todo);
        dispatch({ type: "ADD_TODO", todo: newTodo });
      } else {
        await todoService.update(todo);
        dispatch({ type: "UPDATE_TODO", todo });
      }
    } catch (err) {
      console.log("err:", err);
    }
  };
}

export function removeTodo(todoId) {
  return async (dispatch) => {
    try {
      await todoService.remove(todoId);
      dispatch({ type: "REMOVE_TODO", todoId });
    } catch (err) {
      console.log("err:", err);
    }
  };
}
