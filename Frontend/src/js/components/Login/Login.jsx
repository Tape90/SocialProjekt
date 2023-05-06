import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

export default function Login({handleLogin}) {
  const navigator = useNavigate();
  const formRef = useRef();

  const handleClick = async (event) => {
    event.preventDefault();
    const dataForm = {
      email: formRef.current.email.value,
      password: formRef.current.password.value
    };

    console.log(dataForm)
    const config = {
      url: "http://localhost:3001/api/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(dataForm),
    }
    try {
      const resp = await axios(config);
      console.log(resp);
      localStorage.setItem("token", resp.data.token);
      handleLogin();
      navigator("/");
    } catch (error) {
      console.log(error);
    }
  }

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
                {/* <a className="float-right" href="#">
                  Forgot?
                </a> */}
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
                className="btn btn-danger btn-block">
                  Login
                </button>
              </div>
              </form>
              <div className="form-group text-center padding">
              <Link to={'/Register'}><button className="float-right btn btn-outline-danger">
                  Sign up
                </button>
                </Link>
              </div>
            
          </article>
        </div>
      </div>
  );
}
