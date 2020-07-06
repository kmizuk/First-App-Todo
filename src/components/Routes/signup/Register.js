import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { signUp } from "../../../actions";

const Register = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (formValues) => {
    console.log("ok?_");

    const data = { ...formValues, about: "", avatar_url: "" };
    try {
      await props.signUp(data);
    } catch (err) {
      console.log("ok?_");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>{console.log(errors)}</div>
      <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
        {/* ①name */}
        <div className="field">
          <label>NAME</label>
          <input
            name="display_name"
            ref={register({
              required: true,
            })}
          />
        </div>
        {errors.display_name ? (
          <div className="ui pointing red basic label">
            Display Name is required
          </div>
        ) : null}
        {/* ②email */}
        <div className="field">
          <label>email</label>
          <input
            name="email"
            ref={register({
              required: true,
              pattern: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
            })}
          />
          {errors.email && errors.email.type === "required" ? (
            <div className="ui pointing red basic label">Email is required</div>
          ) : null}
          {errors.email && errors.email.type === "pattern" ? (
            <div className="ui pointing red basic label">
              This input format is invalid
            </div>
          ) : null}
        </div>
        {/* ③password */}
        <div className="field">
          <label>password</label>
          <input
            name="password"
            type="password"
            ref={register({
              required: true,
            })}
          />
        </div>
        {errors.password && errors.password.type === "required" ? (
          <div className="ui pointing red basic label">
            Password is required
          </div>
        ) : null}
        {errors.display_name && errors.password.type === "minLength" ? (
          <div className="ui pointing red basic label">
            Password must be at least 8 characters
          </div>
        ) : null}
        <br></br>
        <br></br>
        {/* ④button */}
        <button className="ui inverted violet button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(null, { signUp })(Register);
