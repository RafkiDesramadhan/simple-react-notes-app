import React from "react";
import propTypes from "prop-types";
import Fade from "react-reveal/Fade";

export default function Banner(props) {
  return (
    <div>
      <div id="banner-mynotes" className="header-image">
        <div className="header-overlay">
          <div className="container">
            <div className="row pt-5 text-white">
              <div className="col">
                <Fade top>
                  <h1 className="display-1 text-banner">{props.bannerText}</h1>
                  <p className="lead">{props.paragraphText}</p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  bannerText: propTypes.string,
  paragraphText: propTypes.string,
};
