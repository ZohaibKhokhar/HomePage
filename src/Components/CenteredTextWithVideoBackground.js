import PersonalizeButton from "./PersonalizeButton";
const CenteredTextWithVideoBackground = () => {
  return (
    <div style={styles.container}>
      <video style={styles.video} autoPlay loop muted>
        <source src="/Videos/5.BLOC-VIDEO-desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={styles.acenter} className="d-flex flex-column align-items-center justify-content-center">      
        <h1 className="hero-title text-white text-center" style={styles.text}>FLY ME <br></br>
          TO THE MOON</h1>
        <PersonalizeButton
          dataElement="DISCOVER"
          url="https://www.goyard.com/eu_en/online-personalisation.html"
          colore="white"
          />
      </div>

    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    overflow: 'hidden', // To prevent video overflow
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures the video covers the whole container
  },
  text: {
    position: 'relative',
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white', // You can change the text color
    zIndex: 1, // Ensure the text is above the video
  },
  acenter: {

    zIndex: '233232'

  }
};

export default CenteredTextWithVideoBackground;
