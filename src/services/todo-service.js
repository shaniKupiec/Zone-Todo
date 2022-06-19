import { API, graphqlOperation } from "aws-amplify";
import { listTodos } from "../graphql/queries";

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

async function add(todo) {
  try {
    // await API.graphql(graphqlOperation(createTodo, { input: todo }));
  } catch (error) {
    console.log("error add todo", error);
    throw error;
  }
}

async function update(todo) {
  try {
    // await API.graphql(graphqlOperation(updateTodo, { input: { id: todoId, name: "Updated todo info" } }));
  } catch (error) {
    console.log("error update todo", error);
    throw error;
  }
}

async function remove(todoId) {
  try {
    // await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId } }));
  } catch (error) {
    console.log("error delete todo", error);
    throw error;
  }
}
