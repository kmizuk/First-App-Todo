import React from "react";
import { Link } from "react-router-dom";

const BeforeHeader = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="ui inverted secondary button">
        <i class="home icon"></i>
        Home
      </Link>
      <div className="right menu">
        <Link to="/signin" className="ui inverted violet button">
          <i class="sign in alternate icon"></i>
          Sign In
        </Link>
        <Link to="/signup" className="ui inverted violet button">
          <i class="sign out alternate icon"></i>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default BeforeHeader;
