import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../actions";
import { Link } from "react-router-dom";

const SignOut = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/">
        <div className="ui inverted red button" onClick={props.signOut}>
          Are you sure?
        </div>
      </Link>
    </div>
  );
};

export default connect(null, { signOut })(SignOut);
