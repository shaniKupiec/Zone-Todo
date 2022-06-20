import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TodoPreview } from "./TodoPreview";
import plusImg from "../assets/images/plus-button.png";

export const TodoList = ({ todos }) => {
  const navigate = useNavigate();

  const addTodo = () => {
    navigate("/todo/edit");
  };

  return (
    <section className="todo-list">
      <header className="todo-list__header">
        <div className="todo-list__header__title">todo List</div>
        <img src={plusImg} className="todo-list__header__add" onClick={addTodo} alt="" />
      </header>
      {todos.map((todo) => (
        <TodoPreview key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
