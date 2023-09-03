import Typewriter from "./Typewriter";

function Hero() {
    const containerStyle = {
      height: '600px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    const words = ["Student", "Programmer"];
  
    return (
      <div className="container" style={containerStyle}>
        <h1>Dugald Macintyre</h1>
        <Typewriter words={words} delay={150} />
      </div>
    );
  }
  
  export default Hero;
  