import { Fragment } from "react";

export default function Feed({id, catastrophe, title, text, region }) {
  return (
    <Fragment>
      <div key={id} className="col-sm p-1">
        <div className="card">
          <div className="card-header">{catastrophe} - {region}</div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <button className="btn btn-primary">
              Mehr
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
