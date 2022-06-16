import { useCallback, useState } from "react";
import { useFormRegister } from "../hooks/useFormRegister.js";
import { memo } from "react";
import {Link} from "react-router-dom";

export const Register = memo((props) => {
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
    <section className="register">
      <div className="register__title">welcome onboard!</div>
      <div className="register__description">Let’s help ypu to meet your Todo!</div>
      <form onSubmit={handleSubmit} className="register__form">
        <input type="text" {...register("fullName")} placeholder="Enter Your Full Name" required />
        <input type="text" {...register("fullName")} placeholder="Enter Your Password" required />
        <button className="register__form__submit">register</button>
      </form>
      <footer className="register__footer">
        Already have Account ?<Link to="/login"> login </Link>
      </footer>
    </section>
  );
});