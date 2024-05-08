import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Varsity = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="container-fluid my-5">
        <h3 className="fw-semibold mb-4">Timeless Varsity Looks</h3>

        <div className="collection_1">
          <Carousel
            swipeable={true}
            draggable={true} // Make it draggable
            responsive={responsive}
            infinite={true}
            keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <div className="content">
                <img src="hoody.jpeg" alt="Image 1" />
                <div className="written_1 mt-4">
                  <h6 className="fw-bold">Nike Club Fleece</h6>
                  <h6 style={{ color: "gray" }}>
                    Men's French Terry Pullover Hoodie
                  </h6>
                  <h6 className="fw-bold">MRP:₹3,995</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="content">
                <img src="fullSleeve.jpeg" alt="Image 2" />
                <div className="written_1 mt-4">
                  <h6 className="fw-bold">Nike Club Fleece</h6>
                  <h6 style={{ color: "gray" }}>
                    Men's Striped Heavyweight French Terry Crew
                  </h6>
                  <h6 className="fw-bold">MRP:₹14,995</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="content">
                <img src="airMax.jpeg" alt="Image 3" />
                <div className="written_1 mt-4">
                  <h6 className="fw-bold">Nike Air Max 90 LV8</h6>
                  <h6 style={{ color: "gray" }}>Women's Shoes</h6>
                  <h6 className="fw-bold">MRP:₹12,795</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="content">
                <img src="shorts.jpeg" alt="Image 4" />
                <div className="written_1 mt-4">
                  <h6 className="fw-bold">Nike Sportswear</h6>
                  <h6 style={{ color: "gray" }}>
                    Men's Woven Oversized Shorts
                  </h6>
                  <h6 className="fw-bold">MRP:₹3,595</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="content">
                <img src="zoom.jpeg" alt="Image 5" />
                <h6 className="fw-bold">Nike Zoom Vomero 5</h6>
                <h6 style={{ color: "gray" }}>Men's Shoes</h6>
                <h6 className="fw-bold">MRP:₹14,995</h6>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Varsity;
