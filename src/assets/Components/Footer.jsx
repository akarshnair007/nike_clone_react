import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const Footer = () => {
  return (
    <>
      <>
        <div
          className="container-fluid  mt-5 pt-5 ps-5"
          style={{ backgroundColor: "#111111" }}
        >
          <div className="top d-flex align-items-center justify-content-between">
            <div className="tLeft">
              <div className="row">
                <div className="col-lg-3 col-sm-12">
                  <h6 style={{ fontSize: "12px" }} className="text-light mb-4">
                    FIND A STORE
                  </h6>
                  <h6
                    style={{ fontSize: "12px", whiteSpace: "nowrap" }}
                    className="text-light mb-4"
                  >
                    BECOME A MEMBER
                  </h6>
                  <h6
                    style={{ fontSize: "12px", whiteSpace: "nowrap" }}
                    className="text-light mb-4"
                  >
                    Send Us Feedback
                  </h6>
                </div>
                <div className="col-lg-1 col-sm-12"></div>
                <div className="col-lg-3 col-sm-12">
                  <h6 style={{ fontSize: "12px" }} className="text-light mb-4">
                    HELP
                  </h6>
                  <h6
                    className="mb-4 help_link"
                    style={{ color: "gray", fontSize: "12px" }}
                  >
                    Get Help
                  </h6>
                  <h6
                    className="mb-4 help_link"
                    style={{ color: "gray", fontSize: "12px" }}
                  >
                    Order Status
                  </h6>
                  <h6
                    className="mb-4 help_link"
                    style={{ color: "gray", fontSize: "12px" }}
                  >
                    Delivery
                  </h6>
                  <h6
                    className="mb-4 help_link"
                    style={{ color: "gray", fontSize: "12px" }}
                  >
                    Returns
                  </h6>
                  <h6
                    className="mb-4 help_link"
                    style={{ color: "gray", fontSize: "12px" }}
                  >
                    Payment Options
                  </h6>
                  <h6
                    className="mb-4 help_link"
                    style={{
                      color: "gray",
                      fontSize: "12px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Contact Us on Nike.com Inquiries
                  </h6>
                  <h6
                    className="mb-4 help_link"
                    style={{
                      color: "gray",
                      fontSize: "12px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Contact Us on All Other Inquiries
                  </h6>
                </div>
                <div className="col-lg-2 col-sm-12"></div>
                <div className="col-lg-3 col-sm-12">
                  <h6 style={{ fontSize: "12px" }} className=" mb-4 text-light">
                    COMPANY
                  </h6>
                  <h6
                    className="mb-4 help_link"
                    style={{ color: "gray", fontSize: "12px" }}
                  >
                    About Nike
                  </h6>
                  <h6
                    className="mb-4  help_link"
                    style={{ color: "gray", fontSize: "12px" }}
                  >
                    News
                  </h6>
                  <h6
                    className="mb-4 help_link"
                    style={{ color: "gray", fontSize: "12px" }}
                  >
                    Careers
                  </h6>
                  <h6
                    className="mb-4  help_link"
                    style={{ color: "gray", fontSize: "12px" }}
                  >
                    Investors
                  </h6>
                  <h6
                    className="mb-4  help_link"
                    style={{ color: "gray", fontSize: "12px" }}
                  >
                    Sustainability
                  </h6>
                </div>
              </div>
            </div>
            <div
              className="tRight row me-4 align-items-center justify-content-center"
              style={{ marginBottom: "auto" }}
            >
              <div className="col-lg-3 col-sm-12">
                {" "}
                <FontAwesomeIcon
                  className="p-2"
                  style={{
                    backgroundColor: "gray",
                    color: "#000000",
                    borderRadius: "50%",
                  }}
                  icon={faTwitter}
                />
              </div>
              <div className="col-lg-3 col-sm-12">
                {" "}
                <FontAwesomeIcon
                  style={{
                    backgroundColor: "gray",
                    borderRadius: "50%",
                    color: "#000000",
                    paddingTop: "8px",
                    paddingLeft: "11px",
                    paddingRight: "11px",
                    paddingBottom: "8px",
                  }}
                  icon={faFacebookF}
                />{" "}
              </div>
              <div className="col-lg-3 col-sm-12">
                {" "}
                <FontAwesomeIcon
                  className="p-2"
                  style={{
                    backgroundColor: "gray",
                    color: "#000000",
                    borderRadius: "50%",
                  }}
                  icon={faYoutube}
                />{" "}
              </div>
              <div className="col-lg-3 col-sm-12">
                {" "}
                <FontAwesomeIcon
                  className="p-2"
                  style={{
                    backgroundColor: "gray",
                    color: "#000000",
                    borderRadius: "50%",
                  }}
                  icon={faInstagram}
                />
              </div>
            </div>
          </div>
          <div className="bottom mt-5 row align-items-center justify-content-between">
            <div className="col-lg-4 col-sm-12">
              {" "}
              <div className="bLeft d-flex gap-3 ">
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faLocationDot}
                />
                <p style={{ color: "white", fontSize: "13px" }}>India</p>
                <p style={{ color: "gray", fontSize: "13px" }}>
                  © 2024 Nike, Inc. All rights reserved
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12"></div>
            <div className="col-lg-4 col-sm-12">
              <div className="bRight me-3">
                <ul className=" d-flex gap-4">
                  <li
                    style={{
                      listStyle: "none",
                      color: "gray",
                      fontSize: "13px",
                    }}
                  >
                    Guides
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      color: "gray",
                      fontSize: "13px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Terms of Sale
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      color: "gray",
                      fontSize: "13px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Terms of Use
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      color: "gray",
                      fontSize: "13px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Nike Privacy Policy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Footer;
