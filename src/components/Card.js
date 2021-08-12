import React from "react";

function Card(props) {
  return (
    <div className={props.style}>
      <div className="card-body">
        <h4 className=" text-center">{props.title}</h4>
        <h5 className="card-title text-center">
          <i className={props.icon} />
        </h5>
        <p className="card-text text-center">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
