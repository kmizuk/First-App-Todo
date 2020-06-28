import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./todos/home";
import SignUp from "./todos/signup";
import SignIn from "./todos/signin";

import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
