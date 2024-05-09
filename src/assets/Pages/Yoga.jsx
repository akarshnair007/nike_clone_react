import React from "react";

const Yoga = () => {
  return (
    <>
      <div className="container-fluid my-5 ms-2 me-3">
        <div className="yoga-content d-flex flex-column">
          <h3 className="fw-semibold mb-4">Don't Miss</h3>
          <div className="yoga-images row me-5 ">
            <div className="col-lg-6 col-sm-12 mb-3">
              {" "}
              <div className="yoga_1">
                <img className="yoga_img" src="Yoga_1.jpg" alt="" />

                <div className="btn_text d-flex gap-3">
                  <h5 id="text_yoga" className="text-light">
                    Nike Ind Bra. Feel Sculpted
                  </h5>
                  <button className="btn btn-light px-3" id="yoga_btn">
                    Shop
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 mb-3">
              {" "}
              <div className="yoga_2">
                <img className="yoga_img" src="Yoga_2.jpg" alt="" />
                <div className="btn_text d-flex gap-3">
                  <h5 id="text_yoga" className="text-dark">
                    For All Walks
                  </h5>
                  <button className="btn btn-dark px-3" id="yoga_btn">
                    Shop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Yoga;
