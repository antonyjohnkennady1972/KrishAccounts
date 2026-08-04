import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-column">
          <h3>Krish Accounting Services</h3>

          <p>Professional Accounting Services</p>
          <p>Gaborone, Botswana</p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#mission">Mission</a>
          <a href="#commitments">Commitments</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Developed and Supported by</h3>

          <p>Basil Tech Services OPC Pvt Ltd</p>
          <p>Thycaud-695014</p>
          <p>Thiruvananthapuram</p>
          <p>Kerala, India</p>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>

          <a
            href="/privacy-policy.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>

          <a
            href="/terms-of-use.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>

          <a
            href="/disclaimer.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Disclaimer
          </a>
          {/* <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
          <Link to="/disclaimer">Disclaimer</Link> */}
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Krish Accounting Services. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;

// function Footer() {
//   return (
//     <footer className="footer">

//       <div className="container">
//         <p>
//           © 2026 KRISH Accounting Services.
//           All Rights Reserved.
//         </p>
//       </div>
//       <div className="footer-extra">
//         <div className="footer-block">
//           <h4>Developed and Supported by</h4>

//           <p>Basil Tech Services OPC Pvt Ltd</p>
//           <p>Thycaud-695014</p>
//           <p>Thiruvananthapuram</p>
//           <p>Kerala, India</p>
//         </div>

//         <div className="footer-block">
//           <h4>User Policy</h4>
//           <p>No user information is collected on this website.</p>
//         </div>

//         <div className="footer-block">
//           <h4>Cookies Policy</h4>
//           <p>No cookies are used on this website.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;