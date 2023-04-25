import "./feedCard.css";
import Feed from "../Feed/Feed";

export default function FeedCard() {
  let text =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

  return (
    <>
      <div className="container">
        <div className="row gap">
          <div className="frame col-sm feed">
            <h1>Request</h1>
            <Feed title={"Test 1"} text={text}/>
            <Feed title={"Test 2"} text={text}/>
          </div>
          <div className="frame col-sm feed">
            <h1>Offer</h1>
            <Feed title={"Test 3"} text={text}/>
            <Feed title={"Test 4"} text={text}/>
          </div>
        </div>
      </div>
    </>
  );
}
