import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import userImg from "../assets/images/user-img.png";
import { TodoList } from "../components/TodoList";
// import { API } from "aws-amplify";
// import { listTodos } from "../graphql/queries";

export const Dashboard = (props) => {
  const { loggedInUser } = useSelector((state) => state.authModule);
  const { todos } = useSelector((state) => state.todoModule);

  return (
    <div className="dashboard">
      <header className="dashboard__head">
        <div className="dashboard__head__block"></div>
        <img src={userImg} alt="" className="dashboard__head__user-img" />
        <div className="dashboard__head__welcome">Welcome {loggedInUser.attributes.name}</div>
      </header>
      <main className="dashboard__main">
        <TodoList todos={todos} />
      </main>
    </div>
  );
};
