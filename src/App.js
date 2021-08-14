import React from "react";
import { Switch, Route } from "react-router-dom";
import ContextProvider from "./Context";
import HomePage from "../src/components/HomePage";
import Projects from "./components/Projects";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "./css/Lightmode.css";
import "./css/Darkmode.css";

function App() {
  return (
      <ContextProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
        </Switch>
      </ContextProvider>
  );
}

export default App;
