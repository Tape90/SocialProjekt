export default function Commentar({ catastrophe }) {


    return(
    
      <>
      <div className="card mb-4">
      <div className="card-body">
        <p>{catastrophe[0]}</p>

        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            {/* <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar"
                        height="25"
                      /> */}
            <p className="small mb-0">{catastrophe[1]}</p>
          </div>
          {/* <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                    </div> */}
        </div>
      </div>
    </div>
    </>
      
    )}



