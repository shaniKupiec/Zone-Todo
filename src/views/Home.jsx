import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import illus2 from '../assets/images/illustration2.png'
import { useDispatch } from "react-redux";
import { login } from "../store/actions/authActions";

export const Home = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const start = () => {
    navigate("/login");
  };

  const demo = async() => {
    await dispatch(
      login({
        username: 'shani.kupiec@gmail.com',
        password: '1234567JKYh!',
      })
    );
    navigate("/dashboard");
  };


  return (
    <section className="home">
      <img src={illus2} alt="" className="home__illustration" />
      <div className="home__title">Organize your work and life, finally.</div>
      <div className="home__description">Become focused, organized, and calm with ToDo. The world’s #1 todo manager and to-do list app.</div>
      <button className="home__start" onClick={start}>
        get started
      </button>
      <button className="home__start" onClick={demo}>
        Try demo
      </button>
    </section>
  );
}
