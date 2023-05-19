import { useRef } from "react";
import toastify from "../toastify";
import { useNavigate } from "react-router-dom";

export default function Code ({resetNumber}) {

    const formRef = useRef();
    const navigator = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        //console.log(resetNumber)
        if (formRef.current.Code.value == resetNumber) {
            navigator("/Reset")
        } else {
            toastify("wrong code", "red")
        }
    }

    return (
        <div className="width">
          <div className="card">
            <article className="card-body">
              <h4 className="card-title mb-4 mt-1">
                Type in the code from your Email
              </h4>
              <form
                ref={formRef}
                onSubmit={(e) => {
                  handleClick(e);
                }}
              >
                <div className="form-group">

                  <input
                    name="Code"
                    required
                    className="mt-5 form-control"
                    placeholder="code"
                    type="text"
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