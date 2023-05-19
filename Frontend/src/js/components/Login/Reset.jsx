import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import toastify from "../toastify";
import axios from "axios";

export default function Reset({setEmailToken}) {

    const formRef = useRef();
    const navigator = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();

        if (formRef.current.password1.value !== formRef.current.password2.value){
            toastify("Password not equal, try again", "red")
        } else {
            const dataForm = {
                password: formRef.current.password1.value
            };

            const config = {
                url: "http://localhost:3001/api/reset",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("reset")}`
                },
                data: JSON.stringify(dataForm)
            };

            try {
                const resp = await axios(config);
                if (resp.data.message == "okay") {
                    setEmailToken(false);
                    localStorage.removeItem("reset");
                    navigator("/Login");
                }

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="width">
          <div className="card">
            <article className="card-body">
              <h4 className="card-title mb-4 mt-1">
                Reset password
              </h4>
              <form
                ref={formRef}
                onSubmit={(e) => {
                  handleClick(e);
                }}
              >
                <div className="form-group">
                  <label>new password</label>
                  <input
                    name="password1"
                    required
                    className="form-control"
                    placeholder="password"
                    type="password"
                  />
                </div>

                <div className="mt-5 form-group">
                  <label>repeat password</label>
                  <input
                    name="password2"
                    required
                    className="form-control"
                    placeholder="password"
                    type="password"
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