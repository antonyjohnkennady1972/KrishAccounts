import img from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${img})`,}}>    
      <div className="hero-content">
        <h1>Welcome to Krish Accounting Services!</h1>

        <p>
          Professional Accounting Services in Gaborone,
          Botswana.
        </p>

        <a href="#contact" className="btn">
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default Hero;