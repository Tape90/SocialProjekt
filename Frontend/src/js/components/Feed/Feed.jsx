import { Fragment } from "react";


export default function Feed({catastrophe, title, text, region, element }) {

  return (
    <Fragment>
      <div id={element.id} className="col-sm p-1">
        <div className="card">
          <div className="card-header">{catastrophe} - {region}</div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <div><img className="" src={element.imageUrl}/></div>
            <button className="mt-2 btn btn-danger">
              Mehr
            </button>
          </div>
        </div>
      </div>



    </Fragment>
  );
}
