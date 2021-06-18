import './App.css';
import {Switch, NavLink, Route, BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import SendEmail from './components/SendEmail';

function App() {
  return (
    <>
  <Router>
  <Navbar />
  <Switch>
    <Route component={Login} exact path="/" />
    <Route component={SendEmail} exact path="/sendemail" />
  </Switch>
  </Router>
    </>
  );
}

export default App;
