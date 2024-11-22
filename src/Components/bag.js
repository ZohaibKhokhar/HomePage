import React from "react";

const Bags = () => {
  const bags = [
    {
      img: "/images/CISALPMMLTY52CL01P_1_trois_quart_787f.webp",
      title: "CISALPIN BACKPACK JET BLACK",
    },
    {
      img: "/images/AMBAS2MMLTY52CL01P_1_trois_quart_54da.webp",
      title: "AMBASSADE MM DOCUMENT CASE JET BLACK",
    },
    {
      img: "/images/BOURG2PMLTY52CL01P_1_trois_quart_338a.webp",
      title: "BOURGET PM TROLLEY CASE JET BLACK",
    },
  ];

  return (
    <div
      className="container-fluid text-center py-5"
      style={{ backgroundColor: "#f7f3ef" }}
    >
      <h2
        className="mb-4"
        style={{
          fontFamily: "'Newsreader', serif",
          fontSize: "14px",
          fontWeight: "400",
          letterSpacing: "1.5px",
          color: "#4d4d4d",
        }}
      >
        AS DEEP AS THE OCEAN
      </h2>

      <div className="d-flex justify-content-center" style={{ gap: "80px" }}>
        {bags.map((bag, index) => (
          <div
            className="text-center bag-container position-relative"
            key={index}
            style={{
              width: "300px",
              height: "350px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Bag Image */}
            <img
              src={bag.img}
              alt={bag.title}
              className="img-fluid"
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
              }}
            />

            {/* Bag Title */}
            <h6
              className="mt-2 text-uppercase"
              style={{
                fontFamily: "'Goyard', sans-serif",
                fontSize: "9px",
                fontWeight: "bold",
                lineHeight: "14px",
                letterSpacing: "0.15em",
                color: "#183f2",
              }}
            >
              {bag.title}
            </h6>

            {/* See All Colors */}
            <p
              className="see-all-colors"
              style={{
                fontFamily: "'Goyard', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.1em",
                color: "#4d4d4d",
                marginTop: "5px",
                cursor: "pointer",
              }}
            >
              See all colors
            </p>

            {/* Hover Icon (Always Rendered but Initially Hidden) */}
            <div
              className="hover-icon"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "15px",
                height: "15px",
                backgroundColor: "black",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0,
                transition: "opacity 0.3s ease",
                zIndex: 2,
              }}
            ></div>
          </div>
        ))}
      </div>

      <style>
        {`
          /* Hide 'See all colors' text on hover */
          .bag-container:hover .see-all-colors {
            visibility: hidden;
          }

          /* Show the hover icon with fade-in effect */
          .bag-container:hover .hover-icon {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default Bags;