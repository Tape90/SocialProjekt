import "./login.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
      <div class="width">
        <div class="card">
          <article class="card-body">
            <h4 class="card-title mb-4 mt-1">Sign up</h4>
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
                <label>Your password</label>
                <input
                  class="form-control"
                  placeholder="******"
                  type="password"
                />
              </div>

              <div class="form-group padding">
                <label>Repeat password</label>
                <input
                  class="form-control"
                  placeholder="******"
                  type="password"
                />
              </div>

              <div class="form-group text-center padding">
              <Link to={'/Profile'}><button type="submit" class="btn btn-primary btn-block">
                  Create Account
                </button>
                </Link>
              </div>
            </form>
          </article>
        </div>
      </div>
  );
}
