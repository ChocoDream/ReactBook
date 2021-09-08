import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//COMPONENTS
import Home from "./Pages/Home/Home";
import Nav from "containers/Nav/Nav";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";
import Credit from "./Pages/Credit/Credit";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/credit">
            <Credit />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
