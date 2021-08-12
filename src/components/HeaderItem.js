import React from "react";

function HeaderItem(props) {
  return (
    <React.Fragment>
      <li className="nav-item p-2 px-3">
        <button className="nav-link btn">
          {props.title} <i className="fa fa-chevron-right d-none d-md-inline" />
        </button>
      </li>
    </React.Fragment>
  );
}

export default HeaderItem;
