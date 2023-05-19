import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import toastify from "../toastify";
import { GoogleLogin } from "@react-oauth/google";
import {uuid4} from "uuid4";

export default function Login({ handleLogin }) {
  const navigator = useNavigate();
  const formRef = useRef();

  const googleClick = async (e) => {
    //console.log(e.credential)
    const data = {
      id: uuid4()}
    const config = {
      url: "http://localhost:3001/api/google",
      method: "POST",
      headers: {
        "Authorization": `Bearer ${e.credential}`,
        "Content-Type": "application/json"
      },
      data: JSON.stringify(data)
    };
    try {
      const resp = await axios(config);
      //console.log(resp);
      if (resp.data.message === "Login successful" || "User created") {
        localStorage.setItem("token", resp.data.token);
        handleLogin();
        navigator("/");
        toastify(resp.data.message);
      }else {
        console.log(resp);
        toastify(resp.data.message, "red");
      }
    }catch (error) {
      console.log(error)
    }
  }

  const handleClick = async (event) => {
    event.preventDefault();
    const dataForm = {
      email: formRef.current.email.value,
      password: formRef.current.password.value,
    };

    console.log(dataForm);
    const config = {
      url: "http://localhost:3001/api/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(dataForm),
    };
    try {
      const resp = await axios(config);
      console.log(resp);
      if (resp.data.message === "User does not exist") {
        toastify(resp.data.message, "red");
      }
      if (resp.data.message === "Password is not correct") {
        toastify(resp.data.message, "red");
      }
      if (resp.data.message === "Login successful") {
        localStorage.setItem("token", resp.data.token);
        handleLogin();
        navigator("/");
        toastify(resp.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="width">
      <div className="card">
        <article className="card-body">
          <h4 className="card-title mb-4 mt-1">Sign in</h4>
          <form
            ref={formRef}
            onSubmit={(e) => {
              handleClick(e);
            }}
          >
            <div className="form-group">
              <label>Your email</label>
              <input
                name="email"
                required
                className="form-control"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="form-group padding">
              <Link to={"/Forgot"}>
                <a className="float-right" href="#">
                  Forgot?
                </a>
              </Link>
              <label>Your password</label>
              <input
                name="password"
                required
                className="form-control"
                placeholder="******"
                type="password"
              />
            </div>

            <div className="form-group text-center padding">
              <button
                onSubmit={handleClick}
                type="submit"
                className="btn btn-danger btn-block"
              >
                Login
              </button>
            </div>
          </form>
          <div className="form-group text-center padding">
            <Link to={"/Register"}>
              <button className="float-right btn btn-outline-danger">
                Sign up
              </button>
            </Link>
          </div>

          <div className="mt-4 d-flex justify-content-center">
            <GoogleLogin
            onSuccess={(credentialResponse) => {
              googleClick(credentialResponse)}}
              // onSuccess= {(credentialResponse) => {
              //   console.log(credentialResponse);
              // }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}
