import { useSelector } from "react-redux";
import userImg from "../assets/images/user-img.png";
import { TodoList } from "../components/TodoList";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/authActions";
import { useNavigate } from "react-router-dom";
import { CityList } from "../components/CityList";

export const Dashboard = (props) => {
  const { loggedInUser } = useSelector((state) => state.authModule);
  const { todos } = useSelector((state) => state.todoModule);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = async () => {
    await dispatch(logout);
    navigate("/");
  };

  console.log('loggedInUser',loggedInUser)
  if(!loggedInUser) return <div>Loading...</div>
  return (
    <div className="dashboard">
      <header className="dashboard__head">
        <div className="dashboard__head__block"></div>
        <img src={userImg} alt="" className="dashboard__head__user-img" />
        <div className="dashboard__head__welcome">Welcome {loggedInUser.attributes.name}</div>
      </header>
      <main className="dashboard__main">
        <TodoList todos={todos} />
        <CityList />
        <section onClick={onLogout}>
          <button className="dashboard__main__btn">logout</button>
        </section>
      </main>
    </div>
  );
};
