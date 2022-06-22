import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm.js";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../store/actions/todoActions.js";
import { CityPreview } from "../components/CityPreview.jsx";

export const TodoEdit = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [city, setCity] = useState(null);
  const { todos } = useSelector((state) => state.todoModule);
  const { loggedInUser } = useSelector((state) => state.authModule);

  useEffect(() => {
    loadTodo();
  }, []);

  const loadTodo = async () => {
    const id = params.id;
    if (id) {
      const todo = todos.find((t) => t.id === id);
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
    if (todo.id) await dispatch(removeTodo(todo));
    navigate("/dashboard");
  };

  const tryCity = async (fields) => {
    console.log("fields", fields);
    const key = "3b8466b956eb07b8b00cdb1acba5895b";
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${fields.title}&appid=${key}`)
      .then((response) => response.json())
      .then((newData) => {
        if (newData.cod === 200) setCity(newData);
      });
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${fields.subtitle}&appid=${key}`)
      .then((response) => response.json())
      .then((newData) => {
        if (newData.cod === 200) setCity(newData);
      });
  };
  const [todo, handleChange, setTodo] = useForm(null, tryCity);

  const onRemoveWeather = () => {
    setCity(null);
  };

  if (!todo) return <div>Loading...</div>;
  const todoTitle = todo.id ? "edit" : "add";
  return (
    <section className="edit">
      <div className="edit__title">{todoTitle} task</div>
      <form onSubmit={onSaveTodo} className="edit__form">
        <input type="text" autoFocus onChange={handleChange} value={todo.title} name="title" placeholder="Enter Todo Title" required />
        <input type="text" onChange={handleChange} value={todo.subtitle} name="subtitle" placeholder="Enter Todo Subtitle" />
        <input type="checkbox" onChange={handleChange} value={todo.doneAt} name="doneAt" defaultChecked={todo.doneAt} />
        <button className="edit__form__submit">save</button>
        <div onClick={onRemove}>delete task</div>
      </form>
      {city && (
        <>
          <CityPreview city={city} />
          <span onClick={onRemoveWeather}>remove weather</span>
        </>
      )}
    </section>
  );
};
