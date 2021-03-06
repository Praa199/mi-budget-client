import React, { useState } from "react";
import { login } from "../services/auth";
import "./Signup";
import "./auth.css";
import * as CONSTS from "../utils/consts";
import * as PATHS from "../utils/paths";
import { Button } from "react-bootstrap";

export default function LogIn({ authenticate, history }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;
  const [error, setError] = useState(null);

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();

    const credentials = {
      email,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      localStorage.setItem(CONSTS.ACCESS_TOKEN, res.data.accessToken);
      authenticate(res.data.user);
      history.push(PATHS.HOMEPAGE);
    });
  }

  return (
    <div className="login">
      <h1 className="login_h1">Log In</h1>
      <form onSubmit={handleFormSubmission} className="signup__form">
        <label className="login_label" htmlFor="input-email">
          Username
        </label>
        <input
          id="input-email"
          type="text"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={handleInputChange}
          required
        />

        <label className="login_label" htmlFor="input-password">
          Password
        </label>
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}

        <Button variant="outline-info" className="button__submit" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
