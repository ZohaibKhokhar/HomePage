import PersonalizeButton from "./PersonalizeButton";
const Footer = () => {
    return (
        <div className="container-fluid" style={{ backgroundColor: '#306f44', padding: '20px 0' }}>
            <div className="row" style={{ marginTop: '50px' }}>
                <div className="col-lg-2"></div>

                <div className="col-lg-3 text-center">
                    <h1 className="form-title">The  Goyard  Gazette</h1>
                    <p className="form-subtitle">
                        Subscribe to the Gazette and be the first to  <br />  receive the latest news
                        from Maison Goyard.
                    </p>
                    <form className="footer-form" style={{ maxWidth: '500px', margin: '0 auto' }}>
                        <input
                            type="email"
                            className="form-control email-input"
                            placeholder="Your email address"
                            required
                        />
                        <PersonalizeButton dataElement="SUBMIT" url="www.google.com" colore="white" />
                    </form>


                </div>

                <div className="col-lg-2 text-center">
                    <img src="/images/goyardLogo.svg" alt="Goyard Logo" style={{ height: '120px', width: '147px', marginBottom: '10px',marginTop: '10px' }} />
                </div>


                <div className="col-lg-3 text-center">
                    <h1 className="form-title">Customer Service</h1>
                    <p className="service-text">Product & Sales Information</p>
                    <p className="service-text">After-sales Service</p>
                    <p className="service-text">Press</p>
                    <p className="service-text">Career</p>
                    <p className="service-text">Taking Care of your Goyard</p>
                    <p className="service-text">FAQ</p>
                </div>

                <div className="col-lg-2"></div>
            </div>
        </div>
    );
}

export default Footer;
