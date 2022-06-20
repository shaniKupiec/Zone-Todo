import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editTodo } from "../store/actions/todoActions";

export const TodoPreview = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleTodo = async () => {
    todo.doneAt = todo.doneAt ? 0 : Date.now();
    await dispatch(editTodo(todo));
  };

  const onEditTodo = (ev) => {
    ev.stopPropagation();
    navigate(`/todo/edit/${todo.id}`);
  };

  let className = "todo__checkbox";
  className += todo.doneAt ? " full" : "";

  return (
    <section className="todo" onClick={toggleTodo}>
      <div className={className}></div>
      <div className="todo__text">
        <span className="todo__text__title"> {todo.title}</span>
        {todo.doneAt !== 0 && <span className="todo__text__doneAt">{todo.doneAt}</span>}
      </div>
      <button className="todo__edit" onClick={onEditTodo}>
        {" "}
        edit{" "}
      </button>
    </section>
  );
};
