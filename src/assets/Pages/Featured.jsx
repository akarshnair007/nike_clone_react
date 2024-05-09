import React from "react";

const Featured = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <h3 className="fw-semibold mb-4">Featured</h3>

        <div className="videoPart">
          <video
            autoPlay
            muted
            playsInline
            loop
            style={{ width: "100%", maxWidth: "100%" }}
          >
            <source src="segment0.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="videoText d-flex flex-column align-items-center justify-content-center mt-3">
          <h1 className="fw-bold home_text2">OWN YOUR SUMMER</h1>
          <h1 className="fw-bold home_text2">IN STYLE</h1>
          <h5 className="home_text11 fw-medium mt-2">
            Possibilities are in the air - inspiring you to make the most of the
            sunshine. Brave the heat in these effortlessly cool fits.
          </h5>
          <div className="button-video mt-4">
            <button className="btn btn-dark" id="btn-home">
              Shop
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
