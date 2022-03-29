import student1 from "../assets/img/student-1.png";
import student2 from "../assets/img/student-2.png";
import student3 from "../assets/img/student-3.png";
import aboutImg from "../assets/img/about-section.png";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="showcase">
        <h1>
          Connect with Peer Mentors
          <br /> Around the Campus
        </h1>
        <div className="tagline">
          <p>Foster Personal Growth</p>
          <span>•</span>
          <p>Cultivate Leadership</p>
          <span>•</span>
          <p>Improve Interpersonal Skills</p>
        </div>

        <button className="button-primary">
          <Link to="/register"> Join Now </Link>
        </button>

        <div className="student-portraits">
          <img src={student1} alt="student" />
          <img src={student2} alt="student" />
          <img src={student3} alt="student" />
        </div>
      </div>
      <div className="about-section">
        <div className="about-section-container">
          <div className="section-1">
            <div className="img-container">
              <img src={aboutImg} alt="" />
            </div>
            <div className="about-article">
              <h3>About Us</h3>
              <p>
                The Peer Mentoring Club established by Central Philippines State
                University aims to provide programs that help new students
                adjust to the university and its different courses by providing
                support from fellow students.
              </p>
              <p>
                Peer Mentors also serve as role models of good character
                development and help organize the skill development programming
                for students delivered by different departments including career
                path choices. The program is directed by Stephen Talorong.
              </p>
            </div>
          </div>

          <div className="section-2">
            <div className="about-article">
              <i className="fas fa-quote-left"></i>
              <p className="quote">
                Have an incredibly <br /> solid mentor network.
              </p>
              <i className="fas fa-quote-right"></i>
            </div>
            <div className="yt-vid">
              <iframe
                width="500"
                height="280"
                src="https://www.youtube.com/embed/CRkQckwazqk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe-form">
        <p>
          Be Updated About The Club's Recent News <br /> And Events.
        </p>
        <form action="">
          <div className="input-container">
            <input type="text" />
            <button className="button-tertiary">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
