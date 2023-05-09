import { useParams, Link } from "react-router-dom";

export default function PublicRequestOffer({ offer, request }) {
  const { id } = useParams();
  console.log(id);

  const selectedOffer = offer.find((element) => String(element.id) === id);
  const selectedRequest = request.find((element) => String(element.id) === id);

  let catastrophe = selectedOffer ? selectedOffer : selectedRequest;

  console.log(catastrophe);

  return (
    <>
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
              <Link to={"/"}>
                <button className="btn btn-danger" type="submit">
                  Back
                </button>
              </Link>
            </div>

            <form>
              <div className="mt-5 row d-flex justify-content-center">
                <div className="col-md-8 col-lg-6 card shadow-0 border">
                  <div className="card-body p-4 text-center">Comments</div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="addANote"
                      className="form-control"
                      placeholder="Type comment..."
                    />
                    <button className="btn-sm mt-1 float-right btn btn-outline-danger">
                      Add comment
                    </button>
                  </div>

                  <div className="card mb-4">
                    <div className="card-body">
                      <p>Hier Kommentar einblenden</p>

                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                            alt="avatar"
                            height="25"
                          />
                          <p className="small mb-0 ms-2">Name</p>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <p className="small text-muted mb-0">Upvote?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
