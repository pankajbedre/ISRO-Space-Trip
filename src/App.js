import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Nav'
import Home from "./components/Home";
import Order from "./components/Order";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/order" exact component={Order} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
