import { useParams, Link } from "react-router-dom";

export default function PublicRequestOffer({ offer, request}) {

    const {id} = useParams();
    console.log(id);

    const selectedOffer = offer.find((element) => String(element.id) === id);
    const selectedRequest = request.find((element) => String(element.id) === id);

    let catastrophe = selectedOffer ? selectedOffer : selectedRequest;

    console.log(catastrophe);

  return (
    <form
      
      >
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="">
          <div className="p-3 py-5 ">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Catastrophe</h4>
            </div>

            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Type</label>
                <p className="form-control"> {catastrophe.type} </p>
              </div>

              <div className="col-md-12">
                <label className="labels">Catastrophe</label>
                <p className="form-control"> {catastrophe.catastrophe} </p>
              </div>

              <div className="col-md-12">
                <label className="labels">Title</label>
                <p className="form-control"> {catastrophe.title} </p>
              </div>
              <div className="col-md-12">
                <label className="labels">Region</label>
                <p className="form-control"> {catastrophe.region} </p>
              </div>
              <div className="col-md-12">
                <label className="labels">Period</label>
                <p className="form-control"> {catastrophe.period} </p>
              </div>
              <div className="col-md-12">
                <label className="labels">Contact</label>
                <p className="form-control"> {catastrophe.contact} </p>
              </div>
              <div className="col-md-12">
                <label className="labels">Description</label>
                <p className="form-control"> {catastrophe.description} </p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link to={"/"}><button
                className="btn btn-danger"
                type="submit"
              >
                Back
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
