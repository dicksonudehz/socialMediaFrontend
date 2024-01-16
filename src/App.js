import Home from "./pages/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./pages/profile/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/register" element = {<Register/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
