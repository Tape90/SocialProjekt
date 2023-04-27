import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
      <div className="width">
        <div className="card">
          <article className="card-body">
            <h4 className="card-title mb-4 mt-1">Sign in</h4>
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
                {/* <a className="float-right" href="#">
                  Forgot?
                </a> */}
                <label>Your password</label>
                <input
                  className="form-control"
                  placeholder="******"
                  type="password"
                />
              </div>

              <div className="form-group text-center padding">
                <Link to={'/Profile'}><button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
                </Link>
              </div>
              <div className="form-group text-center padding">
              <Link to={'/Register'}><button type="submit" className="float-right btn btn-outline-primary">
                  Sign up
                </button>
                </Link>
              </div>
            </form>
          </article>
        </div>
      </div>
  );
}
