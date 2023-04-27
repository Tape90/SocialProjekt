import { useRef } from "react";
import { uuid4 } from "uuid4";

export default function RequestOffer({ offer, setOffer, request, setRequest }) {
  const typeRef = useRef();
  const catastropheRef = useRef();
  const titleRef = useRef();
  const regionRef = useRef();
  const periodRef = useRef();
  const contactRef = useRef();
  const descriptionRef = useRef();

  const addOfferRequest = () => {
    if (
      typeRef.current.value |
      catastropheRef.current.value |
      titleRef.current.value |
      regionRef.current.value |
      periodRef.current.value |
      contactRef.current.value |
      descriptionRef.current.value === "")
     {
      alert("Please fill out all fields!");
    } else {
      const newOfferRequest = {
        id: uuid4(),
        type: typeRef.current.value,
        catastrophe: catastropheRef.current.value,
        title: titleRef.current.value,
        region: regionRef.current.value,
        period: periodRef.current.value,
        contact: contactRef.current.value,
        description: descriptionRef.current.value,
      };

      if (typeRef.current.value === "Offer") {
        setOffer([...offer, newOfferRequest]);

        console.log(offer);
      } else {
        setRequest([...request, newOfferRequest]);

        console.log(request);
      }
    }
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="">
        <div className="p-3 py-5 ">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-right">New Request / Offer</h4>
          </div>

          <div className="row mt-3">
            <div className="col-md-12">
              <label className="labels">Type</label>
              <select
                ref={typeRef}
                className="form-select"
                aria-label="Default select example"
              >
                <option select></option>
                <option value="Request">Request</option>
                <option value="Offer">Offer</option>
              </select>
            </div>

            <div className="col-md-12">
              <label className="labels">Catastrophe</label>
              <select
                ref={catastropheRef}
                className="form-select"
                aria-label="Default select example"
              >
                <option select></option>
                <option value="Flood">Flood</option>
                <option value="Power failure">Power failure</option>
                <option value="Heavy rain">Heavy rain</option>
                <option value="Earthquake">Earthquake</option>
              </select>
            </div>

            <div className="col-md-12">
              <label className="labels">Title</label>
              <input
                ref={titleRef}
                type="text"
                className="form-control"
                placeholder="short Title / description"
                required
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Region</label>
              <input
                ref={regionRef}
                type="text"
                className="form-control"
                placeholder="enter your region"
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Period</label>
              <input
                ref={periodRef}
                type="text"
                className="form-control"
                placeholder="enter the Period"
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Contact</label>
              <input
                ref={contactRef}
                type="text"
                className="form-control"
                placeholder="your Contact details"
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Description</label>
              <textarea
                ref={descriptionRef}
                type="text"
                className="form-control"
                placeholder="Enter a Description"
                rows="4"
              />
            </div>
          </div>

          <div className="mt-5 text-center">
            <button
              onClick={addOfferRequest}
              className="btn btn-danger"
              type="button"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
