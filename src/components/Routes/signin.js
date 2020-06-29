import React from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions";

const SignIn = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="ui inverted violet button" onClick={props.signIn}>
        <i class="thumbs up icon"></i>
        Let's into the App!
      </div>
    </div>
  );
};

export default connect(null, { signIn })(SignIn);
