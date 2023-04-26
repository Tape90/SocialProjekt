export default function RequestOffer() {

  return (
    <div class="container rounded bg-white mt-5 mb-5">


      <div class="">
        <div class="p-3 py-5 ">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">New Request / Offer</h4>
          </div>

          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Type</label>
              <select class="form-select" aria-label="Default select example">

                <option selected>Request or Offer</option>
                <option value="1">Request</option>
                <option value="2">Offer</option>
              </select>
            </div>

            <div class="col-md-12">
              <label class="labels">Catastrophe</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Kind of Catastrophe</option>
                <option value="1">Hochwasser</option>
                <option value="2">Stromausfall</option>
                <option value="3">Starkregen</option>
                <option value="4">Erdbeben</option>
              </select>
            </div>

            <div class="col-md-12">
              <label class="labels">Title</label>
              <input
                type="text"
                class="form-control"
                placeholder="short Title / description"
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
              <label class="labels">Period</label>
              <input
                type="text"
                class="form-control"
                placeholder="enter the Period"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Contact</label>
              <input
                type="text"
                class="form-control"
                placeholder="your Contact details"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Description</label>
              <textarea
                type="text"
                class="form-control"
                placeholder="Enter a Description"
                rows="4"
              />
            </div>
          </div>

          <div class="mt-5 text-center">
            <button class="btn btn-primary" type="button">
              Save
            </button>
          </div>

        </div>
      </div>


    </div>
  )
}