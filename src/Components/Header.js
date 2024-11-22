import React, { useState, useEffect } from "react";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";

const Header = () => {
    const [isTransparent, setIsTransparent] = useState(true);

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setIsTransparent(true); // At the top, make it transparent
        } else {
            setIsTransparent(false); // Scrolled down, make it solid
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
      <div className="Header">
        <div className={`${isTransparent ? "transparent-header" : "nav-header"}`}>
        <Nav1  />
        </div>
        <hr className="navbar-divider" />
        <div className={`${isTransparent ? "transparent-header" : "solid-header"}`}>
        <Nav2 />
        </div>
        <hr className="navbar-divider" />
      </div>
    );
};

export default Header;
