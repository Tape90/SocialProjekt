import "./profile.css"

export default function Profile() {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span className="font-weight-bold">Max</span>
            <span className="text-black-50">max@muster.de</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="surname"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter phone number"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Job</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your Job"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Region</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your region"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Email ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter email id"
                />
              </div>
              </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">State/Region</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="state"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Radius</label>
                <input
                  type="text"
                  className="form-control"
                  value=""
                  placeholder="radius for availability"
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary" type="button">
                Save Profile
              </button>
            </div>
            {/* <div className="mt-5 text-center">
              <button className="btn btn-outline-primary" type="button">
                Change Password
              </button>
            </div> */}
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <span>Special Skills or Equipment</span>
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Special Skills</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Skills"
                rows="3"
              />
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Equipment</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Equipment"
                rows="3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
