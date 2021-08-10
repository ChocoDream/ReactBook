import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//COMPONENTS
import Home from "containers/Home/Home";
import Nav from "containers/Nav/Nav";
import About from "containers/About/About";
import NotFound from "containers/NotFound/NotFound";
import APItester from "containers/APItester/APItester";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/apitests">
            <APItester />
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
