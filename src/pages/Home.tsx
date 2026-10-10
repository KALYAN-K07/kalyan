
import myPhoto from "../assets/myphoto.jpeg";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <div className="home-content">
          <p className="home-greeting">👋 Hello, I'm</p>

          <h1 className="home-title">
            Kalyan <span>K</span>
          </h1>

          <h2 className="home-subtitle">
            Frontend Developer | React Developer
          </h2>

          <p className="home-description">
            I build modern, responsive and user-friendly
            web applications using React, TypeScript,
            JavaScript, HTML and CSS. I enjoy turning
            creative ideas into real-world digital experiences.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Projects →
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="home-image-container">
          <img
            src={myPhoto}
            alt="Kalyan K profile"
            className="home-profile-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
