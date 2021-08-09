import React from "react";
import Dog from "../img/dog-on-beach.jpg";

function About() {
  return (
    <React.Fragment>
      <div class="row">
        <div class="col text-center pt-5">
          <h2>ABOUT</h2>
          <i class="fa fa-paw fa-lg mt-3"></i>
        </div>
      </div>
      <div class="container-fluid col-10 mt-5">
        <div class="row">
          <div class="row p-5">
            <img src={Dog} alt="" class="col-lg-6 img-fluid" />

            <p class="col-lg-6 about mt-4 mt-lg-0">
              <span class="heavy-weight fst-italic">Davault Doggos</span> is a
              premier, small capacity dog walking and boarding service. We only
              board five dogs at a time to ensure that each pup recieves the
              maximum attention and care that they need. Does your dog play well
              with others? Any behaviors you would like encouraged or corrected?
              Do you just need a safe, loving place for your doggo to stay? See
              below for a list of the services we offer.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
