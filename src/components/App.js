import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import BeforeHeader from "./Header/BeforeHeader";
import AfterHeader from "./Header/AfterHeader";
import Home from "./Routes/home";
import SignUp from "./Routes/signup";
import SignIn from "./Routes/signin";
import Create from "./Routes/create";
import Edit from "./Routes/edit";
import SignOut from "./Routes/signout";

import history from "../history";
import { connect } from "react-redux";

const App = (props) => {
  const renderHeader = () => {
    if (props.isSignedIn) {
      return <AfterHeader />;
    } else {
      return <BeforeHeader />;
    }
  };
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          {renderHeader()}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signin/create" exact component={Create} />
            <Route path="/signin/edit" exact component={Edit} />
            <Route path="/signin/signout" exact component={SignOut} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, null)(App);
