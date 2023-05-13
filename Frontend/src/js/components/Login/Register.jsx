import "./login.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { uuid4 } from "uuid4";
import axios from "axios";
import toastify from "../toastify";

export default function Register() {
  const formRef = useRef();

  const navigator = useNavigate();

  const getData = async (event) => {
    event.preventDefault();
    console.log(formRef.current.email.value);
    const form = formRef.current;

    if (form.password1.value !== form.password2.value) {
      alert("Password is not equal. Try again!");
    } else {
      const data = {
        email: form.email.value,
        password: form.password1.value,
        nickname: form.name.value,
        id: uuid4(),
      };

      const config = {
        url: "http://localhost:3001/api/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      };

      try {
        const resp = await axios(config);
        console.log(resp);
        toastify(resp.data.message)
        if (resp.status !== 200 && resp.status !== 201) {
          
          throw new Error("Register failed");          
        }
        navigator("/")
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="width">
      <div className="card">
        <article className="card-body">
          <h4 className="card-title mb-4 mt-1">Sign up</h4>
          <form
            ref={formRef}
            onSubmit={(e) => {
              getData(e);
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
              <label>Your Nickname</label>
              <input
                name="name"
                required
                className="form-control"
                placeholder="Nickname"
                type="text"
              />
            </div>
            <div className="form-group padding">
              <label>Your password</label>
              <input
                name="password1"
                required
                className="form-control"
                placeholder="******"
                type="password"
              />
            </div>

            <div className="form-group padding">
              <label>Repeat password</label>
              <input
                name="password2"
                required
                className="form-control"
                placeholder="******"
                type="password"
              />
            </div>

            <div className="form-group text-center padding">
              {/* <Link to={'/Profile'}>
                </Link> */}
              <button
                onSubmit={getData}
                type="submit"
                className="btn btn-danger btn-block"
              >
                Create Account
              </button>
            </div>
          </form>
        </article>
      </div>
    </div>
  );
}
