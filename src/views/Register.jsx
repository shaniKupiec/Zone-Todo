import { useState } from "react";
import { useFormRegister } from "../hooks/useFormRegister.js";
import { Link, useNavigate } from "react-router-dom";
import { registerAction, confirmRegister } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { loadTodos } from "../store/actions/todoActions.js";

export const Register = (props) => {
  const [isRegister, setIsRegister] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register] = useFormRegister({
    name: "",
    email: "",
    phone: "",
    password: "",
    code: "",
  });

  const submitRegister = async (ev) => {
    ev.preventDefault();
    await dispatch(
      registerAction({
        name: register("name").value,
        email: register("email").value,
        phone: register("phone").value,
        password: register("password").value,
      })
    );
    setIsRegister((current) => !current);
  };

  const submitConfirm = async (ev) => {
    ev.preventDefault();
    await dispatch(
      confirmRegister({
        username: register("email").value,
        code: register("code").value,
      })
    );
    await dispatch(loadTodos(register("email").value));
    navigate("/dashboard");
  };

  return (
    <section className="register">
      <div className="register__title">welcome onboard!</div>
      <div className="register__description">Let’s help ypu to meet your Todo!</div>
      {isRegister && (
        <form onSubmit={submitRegister} className="register__form">
          <input type="text" autoFocus {...register("name")} placeholder="Enter Your Full Name" required />
          <input type="email" {...register("email")} placeholder="Enter Your Email" required />
          <input type="phone" {...register("phone")} placeholder="Enter Your Phone +972..." required />
          <input type="password" {...register("password")} placeholder="Enter Your Password" required />
          <button className="register__form__submit">register</button>
        </form>
      )}
      {!isRegister && (
        <form onSubmit={submitConfirm} className="register__form">
          <input type="text" autoFocus {...register("code")} placeholder="Enter Your Confirmation Code" required />
          <button className="register__form__submit">register</button>
        </form>
      )}
      <footer className="register__footer">
        Already have Account ?<Link to="/login"> login </Link>
      </footer>
    </section>
  );
};
