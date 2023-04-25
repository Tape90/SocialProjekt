import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
      <div class="width">
        <div class="card">
          <article class="card-body">
            <h4 class="card-title mb-4 mt-1">Sign in</h4>
            <form>
              <div class="form-group">
                <label>Your email</label>
                <input
                  name=""
                  class="form-control"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div class="form-group padding">
                <a class="float-right" href="#">
                  Forgot?
                </a>
                <label>Your password</label>
                <input
                  class="form-control"
                  placeholder="******"
                  type="password"
                />
              </div>

              <div class="form-group padding">
                <Link to={'/Profile'}><button type="submit" class="btn btn-primary btn-block">
                  {" "}
                  Login{" "}
                </button>
                </Link>
              </div>
              <div class="form-group padding">
                <a href="" class="float-right btn btn-outline-primary">
                  Sign up
                </a>
              </div>
            </form>
          </article>
        </div>
      </div>
  );
}
