import React, { useState } from "react";
import { FaMapMarkerAlt, FaEye, FaUser, FaSearch, FaBars } from "react-icons/fa";
import Nav2 from "./Nav2";

const Nav1 = ({isTransparent,isVisible}) => {
    const [isNav2Visible, setIsNav2Visible] = useState(false);

    const toggleNav2 = () => {
        setIsNav2Visible(!isNav2Visible);
    };

    return (
        <div className="nav1 "  style={{ backgroundColor: isTransparent ?  "rgba(45, 85, 65, 0.7)": "#183e25" }}>
            {/* Left side with icons and menu icon for mobile */}
            <div className="nav1-left">
                <FaBars className="menu-icon"/> {/* Menu icon */}
                <FaMapMarkerAlt className="icon location-icon" />
                <FaEye className="icon" />
            </div>

            {/* Center text */}
            <div className="nav1-center">
                <h1 className="text-center" style={{fontFamily:'Oswald, sans-serif',marginLeft:'100px',fontSize:'23px'}}>G  O  Y  A  R  D <br /> <h5 style={{ color: "#ccc", fontSize: "13px" }}>P A R I S</h5></h1>
            </div>

            {/* Right side with dropdown and icons */}
            <div className="nav1-right">
                <select className="language-select">
                    <option>EU . EN</option>
                    <option>US . EN</option>
                    <option>FR . FR</option>
                </select>
                <FaUser className="icon" />
                <FaSearch className="icon" />
            </div>

            {/* Nav2 component (collapsible) */}
            {isNav2Visible && <Nav2 />} {/* Conditionally render Nav2 based on isNav2Visible */}
        </div>
    );
};

export default Nav1;