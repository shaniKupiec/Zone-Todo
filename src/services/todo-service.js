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
    console.log('loggedInUserEmail',loggedInUserEmail)
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

async function add(todoData) {
  try {
    await API.graphql({ query: createTodo, variables: { input: todoData } })
  } catch (error) {
    console.log("error add todo", error);
    throw error;
  }
}

async function update(todoData) {
  try {
    await API.graphql({ query: updateTodo, variables: { input: todoData } })
  } catch (error) {
    console.log("error update todo", error);
    throw error;
  }
}

async function remove(todoId) {
  try {
    await API.graphql({ query: deleteTodo, variables: { input: { todoId } }});
  } catch (error) {
    console.log("error delete todo", error);
    throw error;
  }
}
