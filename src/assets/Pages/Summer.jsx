import React from "react";

const Summer = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <h3 className="fw-semibold mb-4">Summer Must-Haves</h3>

        <div className=" mb-4 row">
          <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
            {" "}
            <div className="men">
              <img src="men.jpeg" style={{ height: "100%" }} alt="" />
              <button className="btn btn-dark" id="summer_btn">
                Shop Men's
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
            {" "}
            <div className="women">
              <img src="woman.jpeg" style={{ height: "100%" }} alt="" />
              <button className="btn btn-dark" id="summer_btn">
                Shop Women's
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
            {" "}
            <div className="combine">
              <img src="combine.jpeg" style={{ height: "100%" }} alt="" />
              <button className="btn btn-dark" id="summer_btn">
                Shop Summer Styles
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summer;
