import "./feedCard.css";
import Feed from "../Feed/Feed";

export default function FeedCard({ offer, setOffer, request, setRequest, getOffer, getRequest, handleLogout}) {

//getOffer();
//getRequest();

  return (
    <>
      <div className="container">
        <div className="row gap">
          <div className="frame col-sm feed">
            <h1>Request</h1>
            {request.map((el) => {
              return (
                <Feed 
                  key={el.id}
                  element={el} 
                  catastrophe={el.catastrophe} 
                  title={el.title} 
                  text={el.description} 
                  region={el.region} />
              )
            })}

          </div>
          <div className="frame col-sm feed">
            <h1>Offer</h1>
            {offer.map((el) => {
              return (
                <Feed
                  key={el.id}
                  element={el} 
                  catastrophe={el.catastrophe} 
                  title={el.title} 
                  text={el.description} 
                  region={el.region} />
              )
            })}

          </div>
        </div>
      </div>
    </>
  );
}
