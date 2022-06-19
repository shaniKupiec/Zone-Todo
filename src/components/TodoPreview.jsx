import { useDispatch } from "react-redux";
import { editTodo } from "../store/actions/todoActions";

export const TodoPreview = ({ todo }) => {
  const dispatch = useDispatch();

  // const demo = async() => {
  //   await dispatch(
  //     login({
  //       username: 'shani.kupiec@gmail.com',
  //       password: '1234567JKYh!',
  //     })
  //   );
  //   await dispatch(loadTodos('shani.kupiec@gmail.com'))
  //   navigate("/dashboard");
  // };
  const toggleTask = async() => {
    const doneAt = todo.doneAt ? null : Date.now();
    console.log('todo',todo)
    console.log('{...todo, doneAt}',{...todo, doneAt})
    await dispatch(editTodo({todo: {...todo, doneAt}}))
  };

  let className = "todo__checkbox";
  className += todo.doneAt ? " full" : "";

  return (
    <section className="todo" onClick={toggleTask}>
      <div className={className}></div>
      <div className="todo__text">
        <span className="todo__text__title"> {todo.title}</span>
        {todo.doneAt !== 0 && <span className="todo__text__doneAt">{todo.doneAt}</span>}
      </div>
    </section>
  );
};