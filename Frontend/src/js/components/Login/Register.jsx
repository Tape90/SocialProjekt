import "./login.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
      <div className="width">
        <div className="card">
          <article className="card-body">
            <h4 className="card-title mb-4 mt-1">Sign up</h4>
            <form>
              <div className="form-group">
                <label>Your email</label>
                <input
                  name=""
                  className="form-control"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className="form-group padding">
                <label>Your password</label>
                <input
                  className="form-control"
                  placeholder="******"
                  type="password"
                />
              </div>

              <div className="form-group padding">
                <label>Repeat password</label>
                <input
                  className="form-control"
                  placeholder="******"
                  type="password"
                />
              </div>

              <div className="form-group text-center padding">
              <Link to={'/Profile'}><button type="submit" className="btn btn-danger btn-block">
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
