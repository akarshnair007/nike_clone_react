import React from "react";

const Home = () => {
  return (
    <>
      <div className="home d-flex flex-column align-items-center justify-content-center mb-5">
        <div className="img">
          <img src="home-bg.jpeg" alt="" style={{ width: "98%" }} />
        </div>
        <div className="img-text d-flex mt-5 mb-3 flex-column align-items-center justify-content-center">
          <h5 className="home_text1">
            The next generation of Air technology is here.
          </h5>
          <h1 className="fw-bold home_text2">AIR MAX DN</h1>
          <h1 className="fw-bold home_text2">TRIPLE BLACK</h1>
          <h5 className="home_text11 ">
            Equipped with a revolutionary Dynamic Air Unit built to give you an
            energinzing, reactive sensation with every step.
          </h5>
        </div>
        <div className="button-img">
          <button className="btn btn-dark" id="btn-home">
            Shop
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
