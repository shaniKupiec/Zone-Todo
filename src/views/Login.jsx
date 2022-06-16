import { useCallback, useState } from "react";
import illus1 from "../assets/images/illustration1.png";
import { useFormRegister } from "../hooks/useFormRegister.js";
import { memo } from "react";
import {Link} from "react-router-dom";

export const Login = memo((props) => {
  const [isFieldsOk, setIsFieldsOk] = useState(false);

  const checkValidations = useCallback(({ fullName, password }) => {
    if (fullName.trim().split(" ").length >= 2 && password !== "") {
      setIsFieldsOk({ isFieldsOk: true });
    }
    // console.log('isFieldsOk',isFieldsOk)
  }, []);

  const [register] = useFormRegister(
    {
      fullName: "",
      password: "",
    },
    checkValidations
  );

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("submit!");
  };

  return (
    <section className="login">
      <div className="login__title">welcome back</div>
      <img src={illus1} alt="" className="login__illustration" />
      <form onSubmit={handleSubmit} className="login__form">
        <input type="text" {...register("fullName")} placeholder="Enter Your Full Name" required />
        <input type="text" {...register("password")} placeholder="Enter Your Password" required />
        <button className="login__form__submit">login</button>
      </form>
      <footer className="login__footer">
        Don't have Account ?<Link to="/register"> register </Link>
      </footer>
    </section>
  );
});