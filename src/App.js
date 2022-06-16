// import { Navigate } from "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/Global.scss";
import { AppHeader } from "./components/AppHeader";
import { Home } from "./views/Home";
import { Register } from "./views/Register";
import { Login } from "./views/Login";
import { Dashboard } from "./views/Dashboard";

function App() {
  // const PrivateRoute = (props) => {
  //   const isAdmin = true;
  //   // return isAdmin ? <Route path={props.path} component={props.component} /> : <Navigate  to='/' />
  //   return isAdmin ? <Route {...props} /> : <Navigate to="/login" />;
  // };

  return (
    <HashRouter>
      <div className="app">
        <AppHeader />
        <main className="app__main">
          <Routes>
            {/* <PrivateRoute path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;

