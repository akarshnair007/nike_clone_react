import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Sport = () => {
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
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <h3 className="fw-semibold mb-4">Shop by Sport</h3>

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
                    <img src="basketball.jpg" alt="Image 1" />
                    <div className="written_1 mt-4">
                      <h5 className="fw-semibold" style={{ color: "black" }}>
                        Nike Basketball
                      </h5>
                      <h6 className="fw-semibold">Styles made for your game</h6>
                      <a className="fw-semibold" style={{ color: "black" }}>
                        Shop
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="content">
                    <img src="golf.jpg" alt="Image 2" />
                    <div className="written_1 mt-4">
                      <h5 className="fw-semibold" style={{ color: "black" }}>
                        Nike Golf
                      </h5>
                      <h6 className="fw-semibold">
                        Conquer any course in style
                      </h6>
                      <a className="fw-semibold" style={{ color: "black" }}>
                        Shop
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="content">
                    <img src="trail.jpg" alt="Image 3" />
                    <div className="written_1 mt-4">
                      <h5 className="fw-semibold" style={{ color: "black" }}>
                        Nike Trail
                      </h5>
                      <h6 className="fw-semibold">
                        Gear that leads to wild places
                      </h6>
                      <a className="fw-semibold" style={{ color: "black" }}>
                        Shop
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="content">
                    <img src="tennis.jpg" alt="Image 4" />
                    <div className="written_1 mt-4">
                      <h5 className="fw-semibold" style={{ color: "black" }}>
                        Nike Tennis
                      </h5>
                      <h6 className="fw-semibold">Serve up in style</h6>
                      <a className="fw-semibold" style={{ color: "black" }}>
                        Shop
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="content">
                    <img src="football.jpg" alt="Image 5" />
                    <h5 className="fw-semibold" style={{ color: "black" }}>
                      Nike Football
                    </h5>
                    <h6 className="fw-semibold">
                      Bring mad style to the pitch with the latest gear
                    </h6>
                    <a className="fw-semibold" style={{ color: "black" }}>
                      Shop
                    </a>{" "}
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sport;
