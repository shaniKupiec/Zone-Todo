import { API, graphqlOperation } from "aws-amplify";
import { listTodos } from "../graphql/queries";
import { createTodo, updateTodo, deleteTodo } from "../graphql/mutations";

export const todoService = {
  query,
  add,
  update,
  remove,
};

async function query(loggedInUserEmail) {
  try {
    const filter = {
      userEmail: {
        eq: loggedInUserEmail,
      },
    };
    const apiData = await API.graphql({ query: listTodos, variables: { filter: filter } });
    return apiData.data.listTodos.items;
  } catch (error) {
    console.log("error get todos", error);
    throw error;
  }
}

async function add(todo) {
  try {
    const ans = await API.graphql({ query: createTodo, variables: { input: todo } });
    return ans.data.createTodo
  } catch (error) {
    console.log("error add todo", error);
    throw error;
  }
}

async function update(todo) {
  try {
    delete todo.createdAt;
    delete todo.updatedAt;
    delete todo._deleted;
    delete todo._lastChangedAt;
    await API.graphql({ query: updateTodo, variables: { input: todo } });
  } catch (error) {
    console.log("error update todo", error);
    throw error;
  }
}

async function remove(todo) {
  try {
    const todoData = {
      id: todo.id,
      _version: todo._version,
    };
    await API.graphql({ query: deleteTodo, variables: { input: todoData } });
  } catch (error) {
    console.log("error delete todo", error);
    throw error;
  }
}
