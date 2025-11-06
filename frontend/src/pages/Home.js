import React from "react";
import "./Home.css";
import { FaLinkedin, FaGithub} from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="home">
        <div className="intro">
          <h1>
            Hi,
            <br />
            I'm <span className="highlight">Sakshi Borkar</span>
            <br />
          </h1>
          <p>
            A passionate Full Stack Developer who loves turning creative ideas
            into functional, user-friendly web experiences. I specialize in
            building modern applications using the MERN stack (MongoDB, Express,
            React, Node.js) and have a strong interest in clean design,efficient
            code, and problem-solving. I have good knowledge in Core Java. And I
            also know about the Postman API.
          </p>
          <p>A final year engineering student and a developer.</p>
          <a href="/projects" className="btn">
            View My Projects
          </a>
          <div>
            <a
              href="https://www.linkedin.com/in/sakshi-borkar-6277572b0"
              className="Link"
            >
              LinkedIn <FaLinkedin />
            </a>
            <a href="https://github.com/Saks18" className="Link">
              Github <FaGithub />
            </a>
          </div>
        </div>
        <div className="image">
          <img src="/sakshi2.jpeg" alt="Sakshi" />
        </div>
      </section>
      <section className="skills-section">
        <h2 className="skills-heading">My Skills</h2>

        <div className="skills-container">
          <div className="skill-card-glass">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">Node</div>
            <div className="skill">MongoDB</div>
            <div className="skill">Postman</div>
            <div className="skill">Java</div>
            <div className="skill">SQL</div>
            <div className="skill">Express</div>
          </div>
          <div className="skill_list">
            <ul>
              <li>Frontend: HTML, CSS, JavaScript, React</li>
              <li>Backend: Node.js, Express.js </li>
              <li>Database: MongoDB, SQL </li>
              <li>Other Tools: Git, Github, Postman, VS Code</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="certifications" class="certifications-section">
        <h2>Certifications</h2>
        <ul class="cert-list">
          <li>
            <div class="cert-item">
              <div class="cert-text">
                <h3>Full Stack Development Certification</h3>
                <p>Issued by Apna College</p>
                <a
                  href="https://drive.google.com/file/d/1GJVaDcRUa22X4_qvX3j4TvceytnjBjP4/view?usp=sharing"
                  target="_blank"
                >
                  View Certificate
                </a>
              </div>
              <img
                src="Full_Stack_Development_Certificate.png"
                alt="Full Stack Certificate"
              />
            </div>
          </li>

          <li>
            <div class="cert-item">
              <div class="cert-text">
                <h3>DSA with Java Certification</h3>
                <p>Issued by Apna College</p>
                <a
                  href="https://drive.google.com/file/d/1TQoVIrNQu9WxzmpR-u2UUWSAftxi1r5_/view?usp=sharing"
                  target="_blank"
                >
                  View Certificate
                </a>
              </div>
              <img
                src="DSA_with_Java.png"
                alt="DSA Certificate"
              />
            </div>
          </li>

          <li>
            <div class="cert-item">
              <div class="cert-text">
                <h3>Deloitte Australia - Data Analytics Job Simulation</h3>
                <p>Issued by Forage</p>
                <a
                  href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_iQhjNqNWNgCzeCTex_1751909803757_completion_certificate.pdf"
                  target="_blank"
                >
                  View Certificate
                </a>
              </div>
              <img
                src="Data_Analytics.png"
                alt="Data Analytics Certificate"
              />
            </div>
          </li>

           <li>
            <div class="cert-item">
              <div class="cert-text">
                <h3>Git and Github</h3>
                <p>Issued by Geekster</p>
              </div>
              <img
                src="Geekster.png"
                alt="Git and Github Certificate"
              />
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Home;
