import { useState } from "react";
import "./styles.css";
import profilePic from "./assets/react.svg";

function App() {
  const [likes, setLikes] = useState(0);
  return (
    <div>
      <header className="header">
        <h1>Vatsala Jha</h1>
        <p>Software Developer | Data Enthusiast</p>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about" className="about">
        <img src={profilePic} alt="Vatsala Jha" className="profile-pic" />
        <div>
          <h2>About Me</h2>
          <p>
            Hi, I'm Vatsala, a software engineer passionate about web development,
            data science, and accessibility. I love building scalable applications and
            solving real-world problems.
          </p>
          <button className="like-button" onClick={() => setLikes(likes + 1)}>
            ❤️ Like My Portfolio ({likes})
          </button>
        </div>
      </section>

      <section id="experience" className="experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Software Engineer Intern - Cohesity</h3>
          <p>2021 - 2023</p>
          <ul>
            <li>Built scalable APIs using Go, Python, and TypeScript.</li>
            <li>Reduced production issues by 75% through CI/CD optimization.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Accessibility Developer - Rutgers University</h3>
          <p>2024 - Present</p>
          <ul>
            <li>Implemented automation to improve accessibility for visually impaired students.</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>HerMaps: Campus Facility Tracking System</h3>
          <p>Developed a Next.js-based tracking system with real-time updates.</p>
        </div>
        <div className="project-item">
          <h3>NBA Analytics Platform</h3>
          <p>Built an AI-powered basketball analytics tool using PySpark & AWS.</p>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: vatsala@example.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/vatsalajha" target="_blank">
            linkedin.com/in/vatsalajha
          </a>
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Vatsala Jha</p>
      </footer>
    </div>
  );
}

export default App;