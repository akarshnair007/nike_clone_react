import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Spotlight = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
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
      <div className="container-fluid my-5 mx-5">
        <h3 className="fw-semibold mb-4">Classic Spotlight</h3>

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
                <img src="AJ1.jpg" alt="Image 1" />
              </div>
            </div>
            <div>
              <div className="content">
                <img src="AF1.jpg" alt="Image 2" />
              </div>
            </div>
            <div>
              <div className="content">
                <img src="Dunk.jpg" alt="Image 3" />
              </div>
            </div>
            <div>
              <div className="content">
                <img src="Blazer.jpg" alt="Image 4" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Spotlight;
