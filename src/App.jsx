import './App.css';

const documents = [
  {
    title: 'Class 10 Marksheet',
    category: 'Academic',
    file: '/Class X Marksheet.pdf',
    description: 'Secondary school academic marksheet',
  },
  {
    title: 'Class 12 Marksheet',
    category: 'Academic',
    file: '/Class XII Marksheet.pdf',
    description: 'Higher secondary academic marksheet',
  },
  {
    title: 'Resume / CV',
    category: 'Professional',
    file: '/resume.pdf',
    description: 'My professional resume',
  },
  {
    title: 'Internship Certificate',
    category: 'Internship',
    file: '/Internship-Certificate.jpeg',
    description: 'Internship completion certificate',
  },
  {
    title: 'Electricity Theft Detection',
    category: 'Project',
    file: '/Electricity Theft Detection.pptx.pdf',
    description: 'Project document for Electricity Theft Detection',
  },
];

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <a href="#home" className="logo">
          P<span>N.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#documents">Certificates</a>
          <a href="#internships">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-button" href="#contact">
          Let's Connect ↗
        </a>
      </nav>

      <main>

        {/* ================= HOME ================= */}
        <section className="hero" id="home">

          <div className="hero-content">

            <div className="eyebrow">
              <span className="green-dot"></span>
              PERSONAL PORTFOLIO
            </div>

            <p className="intro">HELLO, I'M</p>

            <h1>
              Prajnan Prayas
              <span> Nayak.</span>
            </h1>

            <h2>Computer Science Engineering Student</h2>

            <p className="hero-description">
              A passionate Computer Science student exploring technology,
              software development, IoT and innovative ideas. Welcome to my
              digital space where I showcase my projects, education and
              achievements.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="primary-btn">
                Explore My Work ↗
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                View Resume ↗
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

            </div>

          </div>

          <div className="hero-visual">

            <div className="photo-frame">
              <img
                src="/profile.jpeg"
                alt="Prajnan Prayas Nayak"
              />
            </div>

            <div className="photo-caption">
              <span>01 / PORTFOLIO</span>
              <h3>Learn. Build. Innovate.</h3>
              <p>Creating possibilities through technology.</p>
            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}
        <section className="section" id="about">

          <p className="section-label">
            01 — ABOUT ME
          </p>

          <h2 className="section-heading">
            More than a student. <span>A creator.</span>
          </h2>

          <p className="section-description">
            I am Prajnan Prayas Nayak, a third-year B.Tech Computer
            Science and Engineering student at the Institute of Technical
            Education and Research, Siksha 'O' Anusandhan. I am interested
            in software development, Internet of Things and emerging
            technologies. I enjoy learning new technologies, developing
            projects and continuously improving my technical skills.
          </p>

        </section>


        {/* ================= EDUCATION ================= */}
        <section className="section" id="education">

          <p className="section-label">
            02 — EDUCATION
          </p>

          <h2 className="section-heading">
            My academic <span>background.</span>
          </h2>

          <div className="education-card">

            <span className="tag">
              CURRENTLY PURSUING
            </span>

            <h3>
              B.Tech — Computer Science and Engineering
            </h3>

            <p>
              Institute of Technical Education and Research (ITER)
            </p>

            <p>
              Siksha 'O' Anusandhan, Odisha
            </p>

            <p className="muted">
              Third Year
            </p>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}
        <section className="section" id="projects">

          <p className="section-label">
            03 — PROJECTS
          </p>

          <h2 className="section-heading">
            Things I've <span>built.</span>
          </h2>

          <div className="project-grid">

            {/* Project 1 */}

            <article className="project-card">

              <span className="project-number">
                PROJECT 01
              </span>

              <h3>
                Electricity Theft Detection
              </h3>

              <p>
                A technology-based project focused on electricity theft
                detection and monitoring using modern technologies.
              </p>

              <div className="tags">
                <span>IoT</span>
                <span>Technology</span>
                <span>Monitoring</span>
              </div>

              <a
                href="/Electricity Theft Detection.pptx.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                View Project Document ↗
              </a>

            </article>


            {/* Project 2 */}

            <article className="project-card">

              <span className="project-number">
                PROJECT 02
              </span>

              <h3>
                IoT Platform
              </h3>

              <p>
                An IoT platform involving application development,
                backend services, database integration and connected
                devices.
              </p>

              <div className="tags">
                <span>Flutter</span>
                <span>Node.js</span>
                <span>MySQL</span>
                <span>IoT</span>
              </div>

            </article>

          </div>

        </section>


        {/* ================= DOCUMENTS ================= */}
        <section className="section" id="documents">

          <p className="section-label">
            04 — MY DOCUMENTS
          </p>

          <h2 className="section-heading">
            Certificates & <span>credentials.</span>
          </h2>

          <p className="section-description">
            Explore my academic records, professional documents,
            certificates and project credentials.
          </p>

          <div className="document-grid">

            {documents.map((doc) => (

              <article
                className="document-card"
                key={doc.title}
              >

                <div className="document-top">

                  <span className="document-icon">
                    {doc.file.endsWith('.jpeg') ? 'IMG' : 'PDF'}
                  </span>

                  <span className="document-category">
                    {doc.category}
                  </span>

                </div>

                <h3>
                  {doc.title}
                </h3>

                <p>
                  {doc.description}
                </p>

                <a
                  href={doc.file}
                  target="_blank"
                  rel="noreferrer"
                  className="document-link"
                >
                  View Document ↗
                </a>

              </article>

            ))}

          </div>

        </section>


        {/* ================= INTERNSHIP ================= */}
        <section className="section" id="internships">

          <p className="section-label">
            05 — EXPERIENCE
          </p>

          <h2 className="section-heading">
            My <span>internship.</span>
          </h2>

          <div className="education-card">

            <span className="tag">
              INTERNSHIP
            </span>

            <h3>
              Internship Experience
            </h3>

            <p>
              Practical learning experience focused on developing
              technical knowledge and applying engineering concepts.
            </p>

            <a
              href="/Internship-Certificate.jpeg"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Open Internship Certificate ↗
            </a>

          </div>

        </section>


        {/* ================= CONTACT ================= */}
        <section
          className="section contact-section"
          id="contact"
        >

          <p className="section-label">
            06 — CONTACT
          </p>

          <h2 className="section-heading">
            Let's connect and <span>collaborate.</span>
          </h2>

          <p className="section-description">
            I'm open to connecting with people, internship
            opportunities, learning experiences and interesting
            technology projects.
          </p>

          <a
            href="mailto:nayakpragyan088@gmail.com"
            className="primary-btn"
          >
            Send Me an Email ↗
          </a>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer>

        <a href="#home" className="logo">
          P<span>N.</span>
        </a>

        <p>
          © 2026 Prajnan Prayas Nayak
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;