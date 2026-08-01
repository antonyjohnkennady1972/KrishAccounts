import { FaLeaf, FaUsers, FaHandshake, FaBriefcase, FaBalanceScale, FaShieldAlt } from "react-icons/fa";
import "../styles/commitments.css";

function Commitments() {
  return (
    <section id="commitments" className="commitments section">

      <div className="container">

        <h2>Commitments</h2>

        <div className="commitment-card">
          <FaLeaf className="commitment-icon esg-icon" />
          <h3>Environmental, Social and Governance (ESG)</h3>

          <p>
            We are committed to driving progress across our network in three
            critical areas:
          </p>

        </div>

        <div className="commitment-card">
          <FaUsers className="commitment-icon diversity-icon" />
          <h3>Diversity, Equity and Inclusion</h3>
        </div>

        <div className="commitment-card">
          <FaHandshake className="commitment-icon people-icon" />
          <h3>People</h3>

          <p>
            Krish’s strength stems from the quality of personal relationships
            forged between our people and our clients, ensuring greater trust,
            responsiveness and more effective service delivery.
          </p>

        </div>

        <div className="commitment-card">
          <FaBriefcase className="commitment-icon business-icon" />
          <h3>Business-minded</h3>

          <p>
            We are characterised by people with an innovative and
            entrepreneurial spirit who can relate closely to the type of
            clients we serve.
          </p>

        </div>

        <div className="commitment-card">
          <FaBalanceScale className="commitment-icon integrity-icon" />
          <h3>Better connected</h3>

          <p>
            We draw on the expertise of our people across the globe to support
            clients as they grow and expand into new markets.
          </p>

        </div>

        <div className="commitment-card">
          <FaShieldAlt className="commitment-icon independence-icon" />
          <h3>Krish’s proposition</h3>

          <p>
            ‘When you choose Krish, you get a more responsive, more personal,
            partner-led service, across the world.’
          </p>

        </div>

      </div>

    </section>
  );
}

export default Commitments;
