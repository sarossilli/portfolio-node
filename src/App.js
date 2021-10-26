import './App.css';

import {
  Route,
  HashRouter,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";


import Home from "./home/Home";
import About from "./about/About";



function App() {
  return (
    <HashRouter basename="">
      <Switch>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Switch>
    </HashRouter>
  );
}

export default App;
