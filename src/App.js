// // import { Navigate } from "react-router-dom";
// import { BrowserRouter , Route, Routes } from "react-router-dom";
// import "./assets/styles/Global.scss";
// import { AppHeader } from "./components/AppHeader";
// import { Home } from "./views/Home";
// import { Register } from "./views/Register";
// import { Login } from "./views/Login";
// import { Dashboard } from "./views/Dashboard";
// import { TodoEdit } from "./views/TodoEdit"

// function App() {
//   // const PrivateRoute = (props) => {
//   //   const isAdmin = true;
//   //   // return isAdmin ? <Route path={props.path} component={props.component} /> : <Navigate  to='/' />
//   //   return isAdmin ? <Route {...props} /> : <Navigate to="/login" />;
//   // };

//   return (
//     <BrowserRouter>
//       <div className="app">
//         <AppHeader />
//         <main className="app__main">
//           <Routes>
//             {/* <PrivateRoute path="/dashboard" element={<Dashboard />} /> */}
//             <Route path="/editTodo" element={<TodoEdit />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/" element={<Home />} />
//           </Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import logo from "./assets/images/plus-button.png";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);

