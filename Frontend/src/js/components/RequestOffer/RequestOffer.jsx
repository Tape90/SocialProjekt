import { useRef, useState } from "react";
import { uuid4 } from "uuid4";
import axios from "axios";

export default function RequestOffer({ offer, setOffer, request, setRequest, getOffer, getRequest }) {

  const [selectedImage, setSelectedImage] = useState(null);

  function getImage(event) {
    console.log(event.target.files[0]);
  }

  const formData = new FormData();

  const typeRef = useRef();
  const catastropheRef = useRef();
  const titleRef = useRef();
  const regionRef = useRef();
  const periodRef = useRef();
  const contactRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const formRef = useRef();

  //console.log(selectedImage);

  const addOfferRequest = async (event) => {
    event.preventDefault();
    const form = formRef.current;

      const id = uuid4();
      formData.append("id", id);
      formData.append("type", form.type.value);
      formData.append("catastrophe", form.catastrophe.value);
      formData.append("title", form.title.value);
      formData.append("region", form.region.value);
      formData.append("period", form.period.value);
      formData.append("contact", form.contact.value);
      formData.append("description", form.description.value);
      formData.append("image", form.image.files[0]);

      //console.log(form.image.files[0]);


      const newOfferRequest = {
        id: id,
        type: typeRef.current.value,
        catastrophe: catastropheRef.current.value,
        title: titleRef.current.value,
        region: regionRef.current.value,
        period: periodRef.current.value,
        contact: contactRef.current.value,
        description: descriptionRef.current.value,
        //image: imageRef.target.files[0],
      };


      if (typeRef.current.value === "Offer") {
        setOffer([...offer, newOfferRequest]);

        try {
          const options = {
            url: "http://localhost:3001/api/postoffer",
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: formData
          }
          const response = await axios(options);
          console.log(response.data); 
          if (!response.ok) {
            throw new Error("Failed to create post");
          } 

        } catch (error) {
          console.error(error);

        }
        getOffer()

      } else {
        setRequest([...request, newOfferRequest]);
        
        try {
          const options = {
            url: "http://localhost:3001/api/postrequest",
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: formData
          }
          const response = await axios(options);
          console.log(response.data); 
          if (!response.ok) {
            throw new Error("Failed to create post");
          }

        } catch (error) {
          console.error(error);

        }
        getRequest();
      
    }
  };



  return (
    <form
      ref={formRef}
      onSubmit={(e)=>{
        addOfferRequest(e);
      }}
      >
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
                  name="type"
                  required
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
                  name="catastrophe"
                  required
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
                  name="title"
                  required
                  type="text"
                  className="form-control"
                  placeholder="short Title / description"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Region</label>
                <input
                  ref={regionRef}
                  name="region"
                  required
                  type="text"
                  className="form-control"
                  placeholder="enter your region"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Period</label>
                <input
                  ref={periodRef}
                  name="period"
                  required
                  type="text"
                  className="form-control"
                  placeholder="enter the Period"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Contact</label>
                <input
                  ref={contactRef}
                  name="contact"
                  required
                  type="text"
                  className="form-control"
                  placeholder="your Contact details"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Description</label>
                <textarea
                  ref={descriptionRef}
                  name="description"
                  required
                  type="text"
                  className="form-control"
                  placeholder="Enter a Description"
                  rows="4"
                />
              </div>
            </div>

            <div className="mt-4 text-center form-group">
              <input
                id="input-file"
                ref={imageRef}
                name="image"
                required
                type="file"
                className="form-control-file"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                  getImage(event);
                }}
                />              
            </div>

            {/* <div className="mt-4 text-center">
            <img src={{imageSrc}}/>
            </div> */}

            <div className="mt-4 text-center">
              <button
                onSubmit={addOfferRequest}
                className="btn btn-danger"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
