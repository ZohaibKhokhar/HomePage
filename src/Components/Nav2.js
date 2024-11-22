import React, { useState, useEffect } from "react";

const Nav2 = () => {
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = window.scrollY; // To keep track of the last scroll position

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // If user scrolls down, hide Nav2
                setIsVisible(false);
            } else {
                // If user scrolls up, show Nav2
                setIsVisible(true);
            }

            // Update last scroll position
            lastScrollY = currentScrollY;
        };

        // Attach the event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`nav2 ${isVisible ? "visible" : "hidden"}`}>
            <nav>
                <ul className="nav2-links">
                    <li><a href="#catalogue">CATALOGUE</a></li>
                    <li><a href="#personalisation">PERSONALISATION</a></li>
                    <li><a href="#maison-goyard">MAISON GOYARD</a></li>
                    <li><a href="#boutiques">BOUTIQUES</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav2;