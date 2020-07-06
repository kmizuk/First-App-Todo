import React from "react";
import { Link } from "react-router-dom";

export const TermsOfService = () => {
  return (
    <div style={{ textAlign: "center" }}>
      利用規約
      <br></br>
      <br></br>
      この利用規約は我々がこのウェブサイト上で提供するサービスの利用条件を定めるものです。
      <br></br>
      登録ユーザーの皆さまには，本規約に従って，本サービスをご利用いただきます。
      <br></br>
      <br></br>
      <Link to="/signup/register">
        <div className="ui inverted violet button">
          <i className="thumbs up outline icon"></i>
          Why not Register!
        </div>
      </Link>
    </div>
  );
};
