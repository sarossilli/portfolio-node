import './App.css';

import {
  Route,
  HashRouter
} from "react-router-dom";


import Home from "./home/Home";
import About from "./about/About";



function App() {
  return (

    <HashRouter>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
      </HashRouter>
  );
}

export default App;
