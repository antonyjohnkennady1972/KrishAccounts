import img from "../assets/images/services.jpg";
function Services() {
  return (
    <section id="services" className="services section">

      <div className="container">

        <h2>Our Services</h2>
        <p className="section-intro">
          We provide comprehensive accounting, taxation,
          company secretarial and corporate finance services
          tailored to help businesses grow with confidence.
        </p>
        <div className="services-content">

          {/* <div className="services-image">
            <img src={img} alt="Business Meeting" />
          </div> */}
          <div className="services-banner">
            <img
              src={img}
              alt="Professional Business Meeting"
            />
          </div>
          <div className="services-grid">

            {/* Existing service cards remain exactly as they are */}

          </div>

        </div>
        <div className="services-grid">
          <div className="service-card">

            <h3>Company Secretarial</h3>

            <ul>
              <li>Legal formalities of Company formation and registration with Registrar of Companies.</li>
              <li>Timely adherence to requirements as per Companies Act, submission of statutory returns and forms.</li>
              <li>Being Company Secretaries and Registered office for the business.</li>
              <li>Provision for holding Board meetings of the company.</li>
              <li>Registration of Patents, Trademarks & Designs.</li>
            </ul>

          </div>

          <div className="service-card">

            <h3>Accounting & Bookkeeping</h3>

            <ul>
              <li>Accounting and Entrepreneurial Business Solutions</li>
              <li>Tax Advisory and Compliance</li>
              <li>Business Advisory and Risk Management</li>
              <li>Corporate Finance and Transaction Support</li>
              <li>Corporate Recovery and Restructuring</li>
              <li>Independent preparation of Annual Financial Statements</li>
              <li>Preparation of periodic Management Accounts.</li>
            </ul>

          </div>

          <div className="service-card">

            <h3>Tax</h3>

            <p>
              Krish’s firms provide expert advice on indirect tax issues for
              businesses entering new markets, managing cross-border transactions
              and avoiding costly pitfalls. Indirect taxes can significantly impact
              cash flow, profitability, and supply chains, making careful planning
              and compliance essential for maintaining a competitive edge.
            </p>

            <ul>
              <li>Tax Planning and filing of Company/Individual Tax Returns.</li>
              <li>Registration for VAT, TIN, Customs with BURS (Botswana Unified Revenue Services).</li>
              <li>Tax disputes with BURS</li>
              <li>Periodic submission of VAT returns.</li>
              <li>Compilation of due diligence reports</li>
              <li>General tax issues</li>
            </ul>

          </div>

          <div className="service-card">
            <h3>Corporate Finance</h3>
            <p>
              You can engage KRISH to act as a liaison between your organization
              and the capital market and leave your decisions that have a financial
              impact up to us. KRISH offers the following services under corporate
              finance:
            </p>

            <ul>
              <li>Applications for working capital finance</li>
              <li>Home loan application</li>
              <li>Term loans to buy vehicle & equipment</li>
              <li>CEDA loan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;