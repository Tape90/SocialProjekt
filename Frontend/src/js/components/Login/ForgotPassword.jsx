import { useRef } from "react";
import axios from "axios";
import toastify from "../toastify";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword({setResetNumber, setEmailToken, resetNumber}) {

    const formRef = useRef();
    const navigator = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        const dataForm = {
            email: formRef.current.email.value
        };

        const config = {
            url: "http://localhost:3001/api/forgot",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data : JSON.stringify(dataForm)
        }
        try {
            const resp = await axios(config);
            console.log(resp);
            if (resp.data.message === "User does not exist!") {
                toastify(resp.data.message, "red");
            }
            if (resp.data.message === "Problems to send email") {
                toastify(resp.data.message, "red");
            }
            if (resp.data.message === "Email sent") {
                toastify(resp.data.toastify);
                setResetNumber(resp.data.code);
                localStorage.setItem("reset", resp.data.token);
                setEmailToken(true);
                navigator("/Code");
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="width">
      <div className="card">
        <article className="card-body">
          <h4 className="card-title mb-4 mt-1">
            Type in your Email to reset password
          </h4>
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

            <div className="form-group text-center padding">
              <button
                onSubmit={handleClick}
                type="submit"
                className="btn btn-danger btn-block"
              >
                Submit
              </button>
            </div>
          </form>
        </article>
      </div>
    </div>
  );
}
