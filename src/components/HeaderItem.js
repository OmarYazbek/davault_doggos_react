import React from "react";

function HeaderItem(props) {
  return (
    <React.Fragment>
      <li className="nav-item p-2 px-3">
        <a className="nav-link" href="index.html">
          {props.title} <i className="fa fa-chevron-right d-none d-md-inline" />
        </a>
      </li>
    </React.Fragment>
  );
}

export default HeaderItem;
