import img from "../assets/images/contact.jpg";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">

        <h2>Contact Us</h2>

        <div className="contact-content">

          <div className="contact-box">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon location" />
              <div>
                <h3>Address</h3>
                <p>
                  <a
                    href="https://maps.google.com/?q=Prime+Plaza+CBD+Gaborone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Plot-54358, Marula Building,<br />
                    Prime Plaza, CBD,<br />
                    Gaborone
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon email" />
              <div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:Krishinfotech02@gmail.com">
                    Krishinfotech02@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhoneAlt className="contact-icon phone" />
              <div>
                <h3>Phone</h3>
                <p>
                  <a href="tel:+26777875952">
                    +267-77875952
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <FaClock className="contact-icon hours" />
              <div>
                <h3>Working Hours</h3>
                <p>
                  Monday – Friday<br />
                  08:00 AM – 05:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="contact-image">
            <img
              src={img}
              alt="Krish Accounting Office"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;

// <div className="contact-item">
//   <FaMapMarkerAlt className="contact-icon location" />
//   <div>
//     <h3>Address</h3>
//     <p>
//       Plot-54358, Marula Building,<br />
//       Prime Plaza, CBD,<br />
//       Gaborone
//     </p>
//   </div>
// </div>

// <div className="contact-item">
//   <FaEnvelope className="contact-icon email" />
//   <div>
//     <h3>Email</h3>
//     <p>Krishinfotech02@gmail.com</p>
//   </div>
// </div>

// <div className="contact-item">
//   <FaPhoneAlt className="contact-icon phone" />
//   <div>
//     <h3>Phone</h3>
//     <p>+267-77875952</p>
//   </div>
// </div>

// <div className="contact-item">
//   <FaClock className="contact-icon hours" />
//   <div>
//     <h3>Working Hours</h3>
//     <p>Monday – Friday<br />08:00 AM – 05:00 PM</p>
//   </div>
// </div>

// import img from "../assets/images/contact.jpg";
// import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock} from "react-icons/fa";
// function Contact() {
//   return (
//     <section id="contact" className="contact section">

//       <div className="container">

//         <h2>Contact Us</h2>

//         <div className="contact-content">

//           <div className="contact-box">

//             <p>
//               <strong>Address</strong><br />
//               Plot-54358, Marula Building,<br />
//               Prime Plaza, CBD,<br />
//               Gaborone
//             </p>

//             <p>
//               <strong>Email</strong><br />
//               Krishinfotech02@gmail.com
//             </p>

//             <p>
//               <strong>Phone</strong><br />
//               +267-77875952
//             </p>

//           </div>

//           <div className="contact-image">
//             <img src={img} alt="Krish Accounting Office" />
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Contact;