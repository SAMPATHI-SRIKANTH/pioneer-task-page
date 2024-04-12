import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />\
              {/* Add more routes as needed */}
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
