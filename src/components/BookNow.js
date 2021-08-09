import React from "react";

function BookNow(props) {
  return (
    <a
      type="button"
      className="btn rounded-pill background-primary px-4 me-3 hover"
      href="booking.html"
    >
      {props.title}
    </a>
  );
}

export default BookNow;
