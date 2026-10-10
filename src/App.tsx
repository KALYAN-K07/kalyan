
import { useState } from "react";
import myPhoto from "./assets/myphoto.jpeg";
import "./App.css";

const devicon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const iconify = "https://api.iconify.design";

const stack = [
  { name: "AWS, Azure, GCP", icon: `${devicon}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
  { name: "Terraform", icon: `${devicon}/terraform/terraform-original.svg` },
  { name: "Docker", icon: `${devicon}/docker/docker-original.svg` },
  { name: "Kubernetes", icon: `${devicon}/kubernetes/kubernetes-original.svg` },
  { name: "Amazon EKS", icon: `${iconify}/logos/aws-eks.svg` },
  { name: "Jenkins", icon: `${devicon}/jenkins/jenkins-original.svg` },
  { name: "GitHub Actions", icon: `${devicon}/githubactions/githubactions-original.svg` },
  { name: "Linux", icon: `${devicon}/linux/linux-original.svg` },
  { name: "Git", icon: `${devicon}/git/git-original.svg` },
  { name: "CI/CD", icon: `${iconify}/mdi/infinity.svg?color=%2338bdf8` },
  { name: "Prometheus", icon: `${devicon}/prometheus/prometheus-original.svg` },
  { name: "Grafana", icon: `${devicon}/grafana/grafana-original.svg` },
  { name: "Datadog", icon: `${iconify}/logos/datadog.svg` },
  { name: "Python", icon: `${devicon}/python/python-original.svg` },
  { name: "Observability with AI", icon: `${iconify}/mdi/brain.svg?color=%2338bdf8` },
  { name: "Bash", icon: `${devicon}/bash/bash-original.svg` },
];

const capabilities = [
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    description:
      "Building and managing scalable cloud infrastructure using AWS and Azure services.",
  },
  {
    icon: "⚙️",
    title: "DevOps Automation",
    description:
      "Automating infrastructure provisioning and deployment workflows using Terraform and scripts.",
  },
  {
    icon: "🚀",
    title: "CI/CD Pipelines",
    description:
      "Creating automated build, test, and deployment pipelines using Jenkins and GitHub Actions.",
  },
  {
    icon: "📦",
    title: "Containers & Kubernetes",
    description:
      "Containerizing applications using Docker and managing workloads with Kubernetes and Amazon EKS.",
  },
  {
    icon: "🖥️",
    title: "Linux & Scripting",
    description:
      "Working with Linux environments, Bash scripting, Python, and system automation.",
  },
  {
    icon: "📊",
    title: "Monitoring & Observability",
    description:
      "Monitoring application performance and infrastructure using Prometheus, Grafana, and Datadog.",
  },
];

const projects = [
  {
    number: "01",
    title: "Cloud-Native Application Deployment",
    description:
      "Deploying containerized applications using AWS, Docker, and Kubernetes.",
    tags: ["AWS", "Docker", "Kubernetes"],
    github: "",
    demo: "",
  },
  {
    number: "02",
    title: "DevOps CI/CD Pipeline",
    description:
      "Automating application build, testing, and deployment using Jenkins, GitHub, and Docker.",
    tags: ["Jenkins", "GitHub", "Docker"],
    github: "",
    demo: "",
  },
  {
    number: "03",
    title: "AWS & Azure Cloud Infrastructure",
    description:
      "Provisioning cloud infrastructure using Terraform and infrastructure-as-code practices.",
    tags: ["AWS", "Azure", "Terraform"],
    github: "",
    demo: "",
  },
  {
    number: "04",
    title: "Kubernetes Deployment",
    description:
      "Deploying and managing containerized applications using Kubernetes.",
    tags: ["Docker", "Kubernetes", "Linux"],
    github: "",
    demo: "",
  },
];

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Stack", id: "stack" },
  { name: "Capabilities", id: "capabilities" },
  { name: "Projects", id: "projects" },
  { name: "Live Apps", id: "live-apps" },
  { name: "Mentor", id: "mentor" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo">
          KALYAN<span>.DEVOPS</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {/* HOME */}
        <section id="home" className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <p className="hero-label">
                DEVOPS • CLOUD • DEVOPS AI • AUTOMATION • SRE
              </p>

              <h1>
                Hello, I'm
                <span>KALYAN K</span>
              </h1>

              <h2>DevOps Engineer</h2>

              <p className="hero-description">
                DevOps Engineer with five years of hands-on
                experience deploying applications across cloud
                environments using AWS, Azure, Terraform, Docker,
                Kubernetes, and CI/CD pipelines. Focused on cloud
                infrastructure, deployment automation, scalability,
                and operational efficiency.
              </p>

              <div className="hero-skills">
                {[
                  "AWS",
                  "Azure",
                  "Terraform",
                  "Docker",
                  "Kubernetes",
                  "EKS",
                  "Jenkins",
                  "GitHub Actions",
                ].map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="hero-actions">
                <a href="#projects" className="primary-btn">
                  Explore My Work ↗
                </a>

                <a href="#contact" className="secondary-btn">
                  Get In Touch →
                </a>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <img
                src={myPhoto}
                alt="Kalyan profile"
                className="hero-image"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-container">
            <p className="section-label">WHO I AM</p>

            <h2 className="section-title">
              About <span>Me</span>
            </h2>

            <div className="about-layout">
              <div className="about-text">
                <h3>Engineering Reliable Cloud Solutions</h3>

                <p>
                  I'm KALYAN, a Cloud DevOps Engineer passionate
                  about automation, cloud computing, containerization,
                  and modern deployment practices.
                </p>

                <p>
                  I enjoy building infrastructure, automating
                  deployments, and solving operational challenges
                  with DevOps tools and cloud-native technologies.
                </p>

                <p>
                  My goal is to build secure, scalable, and reliable
                  systems while continuously improving my skills
                  in cloud engineering and SRE.
                </p>
              </div>

              <div className="about-highlights">
                <div className="highlight-card">
                  <strong>5+</strong>
                  <span>Years of Experience</span>
                </div>

                <div className="highlight-card">
                  <strong>AWS, Azure</strong>
                  <span>Cloud Infrastructure</span>
                </div>

                <div className="highlight-card">
                  <strong>CI/CD</strong>
                  <span>Deployment Automation</span>
                </div>

                <div className="highlight-card">
                  <strong>K8s</strong>
                  <span>Container Orchestration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section id="stack" className="section alt-section">
          <div className="section-container">
            <p className="section-label">TOOLS & TECHNOLOGIES</p>

            <h2 className="section-title">
              My Tech <span>Stack</span>
            </h2>

            <p className="section-intro">
              Technologies I work with in cloud and DevOps engineering.
            </p>

            <div className="stack-grid">
              {stack.map((tech, index) => (
                <div className="stack-card" key={tech.name}>
                  <div className="stack-card-top">
                    <span className="stack-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <img
                      src={tech.icon}
                      alt={`${tech.name} logo`}
                      className="stack-logo"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <h3>{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="section">
          <div className="section-container">
            <p className="section-label">WHAT I DO</p>

            <h2 className="section-title">
              My <span>Capabilities</span>
            </h2>

            <p className="section-intro">
              Building, automating, monitoring, and maintaining
              modern cloud infrastructure.
            </p>

            <div className="card-grid">
              {capabilities.map((item) => (
                <article className="feature-card" key={item.title}>
                  <div className="feature-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section alt-section">
          <div className="section-container">
            <p className="section-label">MY WORK</p>

            <h2 className="section-title">
              Featured <span>Projects</span>
            </h2>

            <p className="section-intro">
              Explore DevOps, cloud, and automation project examples.
            </p>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-top">
                    <span>PROJECT {project.number}</span>
                    <span className="project-code">{"</>"}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo ↗
                      </a>
                    )}

                    {!project.github && !project.demo && (
                      <span>Project links coming soon</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LIVE APPLICATIONS */}
        <section id="live-apps" className="section">
          <div className="section-container">
            <p className="section-label">DEPLOYMENTS</p>

            <h2 className="section-title">
              Live <span>Applications</span>
            </h2>

            <div className="wide-card">
              <div className="wide-card-icon">↗</div>
              <h3>Live Deployment Showcase</h3>

              <p>
                Explore my cloud deployment projects,
                containerized applications, and practical
                DevOps implementations.
              </p>

              <span className="coming-soon">
                Live application links coming soon
              </span>
            </div>
          </div>
        </section>

        {/* DEVOPS LEARNING */}
        <section id="mentor" className="section alt-section">
          <div className="section-container">
            <p className="section-label">LEARN & GROW</p>

            <h2 className="section-title">
              DevOps <span>Learning</span>
            </h2>

            <div className="wide-card">
              <div className="wide-card-icon">◎</div>
              <h3>Learning & Knowledge Sharing</h3>

              <p>
                Exploring DevOps fundamentals, AWS cloud,
                infrastructure automation, CI/CD, Docker,
                Kubernetes, and cloud observability.
              </p>

              <p>
                Resources, learning notes, and mentoring
                information can be added here.
              </p>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <div className="section-container">
            <p className="section-label">MY BACKGROUND</p>

            <h2 className="section-title">
              My <span>Education</span>
            </h2>

            <div className="education-card">
              <div className="education-icon">🎓</div>

              <div>
                <h3>B.Tech / Qualification</h3>
                <h4>
                  RGMCET / Jawaharlal Nehru Technological
                  University, Anantapur
                </h4>

                <p>
                  Add your graduation year, specialization,
                  and academic details here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section alt-section">
          <div className="section-container">
            <p className="section-label">GET IN TOUCH</p>

            <h2 className="section-title">
              Contact <span>Me</span>
            </h2>

            <div className="contact-card">
              <h3>Let's Build Something Great.</h3>

              <p>
                Interested in working together, discussing
                DevOps opportunities, or connecting about
                cloud engineering? I'd love to connect.
              </p>

              <div className="contact-actions">
                <a
                  href="https://github.com/KALYAN-K07"
                  className="primary-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/kalyan-k-0b51b8192"
                  className="secondary-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>

              <p className="contact-note">
                Connect with me on GitHub and LinkedIn.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          KALYAN<span>.DEVOPS</span>
        </a>

        <p>
          © {new Date().getFullYear()} KALYAN.
          Built with React & TypeScript.
        </p>
      </footer>
    </div>
  );
}

export default App;
