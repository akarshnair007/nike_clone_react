import React, { useState, useEffect } from "react";

const TextDisplay = () => {
  const [texts, setTexts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts]);

  useEffect(() => {
    setTexts([
      <>
        <p style={{ fontSize: "1.2vw" }}>Save upto 40%</p>
        <a
          href=""
          style={{
            textDecoration: "underline",
            color: "black",
            fontSize: "1vw",
            fontWeight: "680",
          }}
        >
          Show All Our New Markdowns
        </a>
      </>,
      <>
        <p style={{ fontSize: "1.2vw" }}>
          Save Up to 40% Shop All Our New Markdowns Move, Shop, Customise &
          Celebrate With Us.
          <br />
          No matter what you feel like doing today, It’s better as a Member.
        </p>
        <a
          href=""
          style={{
            textDecoration: "underline",
            color: "black",
            fontSize: "1vw",
            fontWeight: "680",
          }}
        >
          Join Us{" "}
        </a>
      </>,
    ]);
  }, [currentIndex]);

  return (
    <div
      className="text_display"
      style={{
        backgroundColor: "#f5f5f5",
        marginTop: "14vh",
      }}
    >
      {/* Added paddingTop to create space for the fixed header */}
      <h6 className="text-center py-3" style={{ marginBottom: "0px" }}>
        {texts[currentIndex]}
      </h6>
    </div>
  );
};

export default TextDisplay;
