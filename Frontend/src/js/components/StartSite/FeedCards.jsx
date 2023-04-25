import './feedCard.css'
import Feed from '../Feed/Feed';

export default function FeedCard() {

  let text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

  return (
    <>
      
        <div className="container text-center">
          <div className="row">
            <div className='col'>
              <Feed title={"Vorspeise"} text={text} />
              <Feed title={"Vorspeise"} text={text} />
            </div>
            <div className='col'>
              <Feed title={"Nachspeise"} text={text} />
              <Feed title={"Grill / Smoker"} text={text} />
            </div>


          </div>
        </div>
      
    </>
  );
}
