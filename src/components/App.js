import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import BeforeHeader from "./Header/BeforeHeader";
import AfterHeader from "./Header/AfterHeader";
import Home from "./Routes/home";
import Register from "./Routes/signup/Register";
import { Result } from "./Routes/signup/Result";
import { TermsOfService } from "./Routes/signup/TermsOfService";
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
            <Route path="/signup" exact component={TermsOfService} />
            <Route path="/signup/register" exact component={Register} />
            <Route path="/signup/result" exact component={Result} />
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
//props.isSignedInで呼び出せる

export default connect(mapStateToProps, null)(App);
