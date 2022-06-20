import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm.js";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../store/actions/todoActions.js";

export const TodoEdit = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [todo, handleChange, setTodo] = useForm(null);
  const { todos } = useSelector((state) => state.todoModule);
  const { loggedInUser } = useSelector((state) => state.authModule);

  useEffect(() => {
    loadTodo();
  }, []);

  const loadTodo = async () => {
    const id = params.id;
    // console.log("id", id);
    if (id) {
      const todo = todos.find((t) => t.id === id);
      // console.log("todo", todo);
      setTodo(todo);
    } else {
      setTodo({
        title: "",
        subtitle: "",
        doneAt: 0,
        userEmail: loggedInUser.attributes.email,
      });
    }
  };

  const onSaveTodo = async (ev) => {
    ev.preventDefault();
    await dispatch(editTodo(todo));
    navigate("/dashboard");
  };

  const onRemove = async () => {
    if(todo.id) await dispatch(removeTodo(todo));
    navigate("/dashboard");
  };

  if (!todo) return <div>Loading...</div>;
  return (
    <section className="edit">
      <form onSubmit={onSaveTodo} className="edit__form">
        <input type="text" autoFocus onChange={handleChange} value={todo.title} name="title" placeholder="Enter Todo Title" required />
        <input type="text" onChange={handleChange} value={todo.subtitle} name="subtitle" placeholder="Enter Todo Subtitle" />
        <input type="checkbox" onChange={handleChange} value={todo.doneAt} name="doneAt" defaultChecked={todo.doneAt} />
        <button className="edit__form__submit">save</button>
        <div onClick={onRemove}>delete</div>
      </form>
    </section>
  );
};
