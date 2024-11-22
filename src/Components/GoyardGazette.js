import React from "react";
import "../GoyardGazette.css"; // Custom styles
import PersonalizeButton from "./PersonalizeButton";

const GoyardGazette = () => {
    return (
        <div className="container">
            <div className="gazette-container">
                <div className="row align-items-center">

                    {/* Left Section */}

                    <div className="col-lg-4 col-md-6 offset-lg-2 gazette-left">
                        <h1 className="gazette-title">The Goyard Gazette</h1>
                        <p className="gazette-subtitle">
                            Subscribe to the Gazette and be the first to receive the latest news
                            from Maison Goyard.
                        </p>
                        <form className="gazette-form">
                            <input
                                type="email"
                                className="form-control email-input"
                                placeholder="Your email address"
                                required
                            />
                           <PersonalizeButton dataElement="Submit" url="www.google.com" colore="black" />
                        </form>
                    </div>

                    {/* Right Section */}
                    
                    <div className="col-lg-6 col-md-6 text-center">
                        <img
                            src="/images/GOYARD_blocgazette_V4-1-260x335_2.gif"
                            alt="Illustration"
                            className="illustration"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoyardGazette;