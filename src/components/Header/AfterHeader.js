import React from "react";
import { Link } from "react-router-dom";

const AfterHeader = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/signin/create" className="ui inverted secondary button">
        <i className="pencil alternate icon"></i>
        Create
      </Link>
      <div className="right menu">
        <Link to="/signin/signout" className="ui inverted violet button">
          <i className="sign out alternate icon"></i>
          Sign Out
        </Link>
        <Link to="/signin/edit" className="ui inverted violet button">
          <i className="edit icon"></i>
          Edit
        </Link>
      </div>
    </div>
  );
};

export default AfterHeader;
