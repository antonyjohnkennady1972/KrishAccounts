import img from "../assets/images/about.jpg";
function About() {
  return (
    <section id="about" className="about section">

      <div className="container">

        <h2>About Krish</h2>

        <div className="about-content">

          <div className="about-image">
            <img
              //src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
              src={img}
              alt="Krish Accounting"
            />
          </div>

          <div className="about-text">

            <p>
              Welcome to Krish Accounting Services!
            </p>

            <p>
              KRISH is a full-service mid-size accounting firm in Gaborone,
              Botswana with a staff of professionals available to guide you
              through every facet of ensuring that your business is compliant
              of fiscal laws of the country. We endeavour to continue to provide
              the highest level of professionalism and guidance across many
              industries, including retail, manufacturing, services, fashion,
              entertainment and technology, with regards to both large- and
              small-sized corporations.
            </p>

            <p>
              Our services include, but are not limited to, financial statement
              preparation, tax preparation, BURS representation, cash flow and
              budget analysis, company formation and secretarial compliances,
              applications for term loan finance and business advisory role.
            </p>

            <p>
              Krish advisory professionals work with some of the leading
              organizations to help create and protect sustainable value.
              Combining the right technology with leading insight and world-class
              processes, we help to power continuous improvement and responsible
              growth.
            </p>

            <p>
              Our aim is to exceed your expectations.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;