import "./profile.css"

export default function PublicProfile() {
  return (
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span class="font-weight-bold">Max</span>
            <span class="text-black-50">max@muster.de</span>
            <span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="first name"
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Surname</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="surname"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Mobile Number</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter phone number"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Job</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter your Job"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Region</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter your region"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Email ID</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter email id"
                />
              </div>
              </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels">State/Region</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="state"
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Radius</label>
                <input
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="radius for availability"
                />
              </div>
            </div>
        </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center experience">
              <span>Special Skills or Equipment</span>
            </div>
            <br />
            <div class="col-md-12">
              <label class="labels">Special Skills</label>
              <textarea
                type="text"
                class="form-control"
                placeholder="Skills"
                rows="3"
              />
            </div>{" "}
            <br />
            <div class="col-md-12">
              <label class="labels">Equipment</label>
              <textarea
                type="text"
                class="form-control"
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
