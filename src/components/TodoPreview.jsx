export const TodoPreview = ({ todo }) => {
  const toggleTask = () => {};
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