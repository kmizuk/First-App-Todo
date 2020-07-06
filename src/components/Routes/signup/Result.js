import React from "react";
import { Link } from "react-router-dom";

export const Result = () => {
  return (
    //div→Linkで登録用のページに飛ぶ
    <div style={{ textAlign: "center" }}>
      <div>congratulations!!</div>
      <br></br>
      <i className="check circle outline icon massive"></i>
      <br></br>
      <br></br>
      <Link to="/signin">
        <div className="ui inverted violet button">Let's Sign In!</div>
      </Link>
    </div>
  );
};
