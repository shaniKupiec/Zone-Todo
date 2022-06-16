import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import illus2 from '../assets/images/illustration2.png'

export function Home(props) {
  const navigate = useNavigate();

  const start = useCallback(() => {
    // console.log("hi");
    navigate("/login", { replace: true });
  }, [navigate]);

  const demo = useCallback(() => {
    // await store.dispatch({ type: "demo" });
    navigate("/dashboard", { replace: true });
    // navigate("/dashboard/todo", { replace: true });
  }, [navigate]);

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
