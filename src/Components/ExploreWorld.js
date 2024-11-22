import PersonalizeButton from "./PersonalizeButton";

const ExploreWorld = () => {
    return (
        <div className="container-bag">
            <div className="container">
                <div className="row">
                    <p
                        style={{ fontSize: "14px", fontFamily: "Newsreader", margin: "16px 0" }}
                        className="text-center"
                    >
                        EXPLORE THE WORLD OF GOYARD
                    </p>
                </div>
                <div className="row my-1">
                    {/* First Column with Image and Button */}
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-start mb-3">
                        <img
                            src="/images/bag1.webp"
                            alt="Bag 1"
                            className="img-fluid w-sm-100"
                            style={{ maxWidth: "100%", marginBottom: "10px" }}
                        />
                        <PersonalizeButton
                            dataElement="Goyard Official"
                            url="https://www.goyard.com/eu_en/online-personalisation.html"
                            colore="black"
                        />

                    </div>

                    {/* Second Column with Image and Button */}
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-start mt-4">
                        <img
                            src="/images/bag2.webp"
                            alt="Bag 2"
                            className="img-fluid w-sm-100"
                            style={{ maxWidth: "100%", marginBottom: "10px" }}
                        />
                        <PersonalizeButton
                            dataElement="Discover"
                            url="https://www.goyard.com/eu_en/online-personalisation.html"
                            colore="black"
                        />
                    </div>
                </div>
            </div>
            <div className="row text-start d-none d-sm-block">
                <img
                    src="/images/hulot.webp"
                    alt="logo"
                    style={{ maxWidth: "100%", width: "123px", height: "93px", marginLeft: "10px" }}
                />
            </div>

        </div>
    );
};

export default ExploreWorld;
