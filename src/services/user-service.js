// import { Todo } from "@/models/todo.models";
// import { User } from "@/models/user.models";

// export const userService = {
//   getToStore,
//   login,
//   register,
//   editTodo,
//   getTodo,
// };
// const USERS_KEY = "users";
// const USER_ID_KEY = "logged-in-user-id";

// const usersCache = _getFromStorage(USERS_KEY);
// let users: User[];
// if (usersCache) users = usersCache as User[];
// else {
//   users = [
//     {
//       id: _makeId(),
//       fullName: "Guest Guest",
//       password: "Guest Guest",
//       todos: [
//         {
//           id: _makeId(),
//           title: "Learn options api",
//           subtitle: '',
//           doneAt: 1654505358000,
//         },
//         {
//           id: _makeId(),
//           title: "Learn composition api",
//           subtitle: '',
//           doneAt: null,
//         },
//         {
//           id: _makeId(),
//           title: "Watch video about State Management",
//           subtitle: '',
//           doneAt: 1654504358000,
//         },
//         {
//           id: _makeId(),
//           title: "Watch video about State Management Watch video about State Management",
//           subtitle: '',
//           doneAt: 1654504358000,
//         },
//         {
//           id: _makeId(),
//           title: "Make Todo App",
//           subtitle: '',
//           doneAt: null,
//         },
//         {
//           id: _makeId(),
//           title: "Learn Vue2",
//           subtitle: '',
//           doneAt: null,
//         },
//       ],
//     },
//   ];
//   _saveToStorage(users, USERS_KEY);
// }

// let loggedInUser: User | null;
// const userIdCache = _getFromStorage(USER_ID_KEY);
// if (userIdCache) {
//   const idx = users.findIndex((u) => u.id === userIdCache);
//   loggedInUser = users[idx];
// }

// function getToStore(): [User[], User | null] {
//   return [users, loggedInUser];
// }

// function login(userInfo: Partial<User>): User | null {
//   const idx: number = users.findIndex((u) => u.password === userInfo.password);
//   if (idx > -1) {
//     loggedInUser = users[idx];
//     _saveToStorage(loggedInUser.id, USER_ID_KEY);
//     return loggedInUser;
//   }
//   return null;
// }

// function register(userInfo: User): User {
//   userInfo.id = _makeId();
//   userInfo.todos = [];
//   users.push(userInfo);
//   loggedInUser = userInfo;
//   _saveToStorage(users, USERS_KEY);
//   _saveToStorage(userInfo.id, USER_ID_KEY);
//   return userInfo;
// }

// function editTodo(todo: Todo): Todo {
//   if (!loggedInUser) throw "no logged in user";
//   if (todo.id) {
//     const idx = loggedInUser.todos.findIndex((t) => t.id === todo.id);
//     if (idx === undefined) throw "no such todo";
//     loggedInUser.todos[idx] = todo;
//   } else {
//     todo.id = _makeId();
//     loggedInUser.todos.push(todo);
//   }
//   _updateUsers();
//   return todo;
// }

// function getTodo(todoId: string | null): Todo {
//   if (!loggedInUser) throw "no logged in user";
//   if (!todoId)
//     return {
//       title: "",
//       subtitle: "",
//       doneAt: null,
//     };
//   const todo = loggedInUser.todos.find((t) => t.id === todoId);
//   if (todo) return todo;
//   throw "no such todo";
// }

// function _updateUsers() {
//   if (!loggedInUser) return;
//   const idx = users.findIndex((u) => u.id === loggedInUser?.id);
//   users[idx] = loggedInUser;
//   _saveToStorage(users, USERS_KEY);
// }

// function _saveToStorage(value: unknown, key: string) {
//   sessionStorage.setItem(key, JSON.stringify(value));
// }

// function _getFromStorage(key: string): unknown {
//   return JSON.parse(sessionStorage.getItem(key) || "null");
// }

// function _makeId(length = 5): string {
//   let text = "";
//   const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (let i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text;
// }
