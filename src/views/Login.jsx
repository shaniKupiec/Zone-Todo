import illus1 from "../assets/images/illustration1.png";
import { useFormRegister } from "../hooks/useFormRegister.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/authActions";
import { loadTodos } from "../store/actions/todoActions";

export const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register] = useFormRegister(
    {
      username: "",
      password: "",
    },
  );

  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault();
      await dispatch(
        login({
          username: register("username").value,
          password: register("password").value,
        })
      );
      await dispatch(loadTodos(register("username").value))
      navigate("/dashboard");
    } catch (err) {
      alert("try again");
    }
  };

  return (
    <section className="login">
      <div className="login__title">welcome back</div>
      <img src={illus1} alt="" className="login__illustration" />
      <form onSubmit={handleSubmit} className="login__form">
        <input type="email" autoFocus {...register("username")} placeholder="Enter Your Email" required />
        <input type="password" {...register("password")} placeholder="Enter Your Password" required />
        <button className="login__form__submit">login</button>
      </form>
      <footer className="login__footer">
        Don't have Account ?<Link to="/register"> register </Link>
      </footer>
    </section>
  );
};
