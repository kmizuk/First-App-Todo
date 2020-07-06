import React from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions";
import { Link } from "react-router-dom";

const SignIn = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <br></br>
      <div>Please Fill in the blanks</div>
      <br></br>
      <form>
        <label>
          email====
          <input type="text" name="name" />
        </label>
      </form>
      <br></br>
      <form>
        <label>
          pass====
          <input type="text" name="name" />
        </label>
      </form>
      <br></br>
      <Link to="/signin/create">
        <br></br>
        <div className="ui inverted violet button" onClick={props.signIn}>
          <i className="thumbs up icon"></i>
          Let's into the App!
        </div>
      </Link>
    </div>
  );
};

export default connect(null, { signIn })(SignIn);
