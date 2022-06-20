// import { Navigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/Global.scss";
import { AppHeader } from "./components/AppHeader";
import { Home } from "./views/Home";
import { Register } from "./views/Register";
import { Login } from "./views/Login";
import { Dashboard } from "./views/Dashboard";
import { TodoEdit } from "./views/TodoEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppHeader />
        <main className="app__main">
          <Routes>
            <Route path="/todo/edit/:id" element={<TodoEdit />} />
            <Route path="/todo/edit" element={<TodoEdit />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
