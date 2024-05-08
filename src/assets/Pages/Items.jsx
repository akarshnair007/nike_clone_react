import React from "react";

const Items = () => {
  return (
    <>
      <div className="container-fluid items_part mx-5">
        <div className="row">
          <div className="col-lg-1 col-sm-12"></div>
          <div className="col-lg-2 col-sm-12 d-flex align-items-center justify-content-center">
            <div className="items">
              <div className="item_heading mb-4">
                <h5>Icons</h5>
              </div>
              <h6 className="mb-3 fw-normal">Air Force 1</h6>
              <h6 className="mb-3 fw-normal">Huarache</h6>
              <h6 className="mb-3 fw-normal">Air Max 90</h6>
              <h6 className="fw-normal">Air Max 95</h6>
            </div>
          </div>
          <div className="col-lg-2 col-sm-12 d-flex align-items-center justify-content-center">
            <div className="items">
              <div className="item_heading mb-4">
                <h5>Shoes</h5>
              </div>
              <h6 className="mb-3 fw-normal">All Shoes</h6>
              <h6 className="mb-3 fw-normal">Custom Shoes</h6>
              <h6 className="mb-3 fw-normal">Jordan Shoes</h6>
              <h6 className="mb-3 fw-normal">Running Shoes</h6>
            </div>
          </div>
          <div className="col-lg-2 col-sm-12 d-flex align-items-center justify-content-center">
            <div className="items">
              <div className="item_heading mb-4">
                <h5>Clothing</h5>
              </div>
              <h6 className="mb-3 fw-normal">All Clothing</h6>
              <h6 className="mb-3 fw-normal">Modest Wear</h6>
              <h6 className="mb-3 fw-normal">Hoodies & Pullovers</h6>
              <h6 className="mb-3 fw-normal">Shirts & Tops</h6>
            </div>
          </div>
          <div className="col-lg-2 col-sm-12 d-flex align-items-center justify-content-center">
            <div className="items">
              <div className="item_heading mb-4">
                <h5>Kids</h5>
              </div>
              <h6 className="mb-3 fw-normal" style={{ whiteSpace: "nowrap" }}>
                Infant & Toddler Shoes
              </h6>
              <h6 className="mb-3 fw-normal">Kids' Shoes</h6>
              <h6 className="mb-3 fw-normal">Kids' Jordan Shoes</h6>
              <h6 className="mb-3 fw-normal">Kids' Basketball Shoes</h6>
            </div>
          </div>
          <div className="col-lg-1 col-sm-12"></div>
        </div>
      </div>
    </>
  );
};

export default Items;
