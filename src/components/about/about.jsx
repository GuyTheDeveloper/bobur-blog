import { Link } from "react-router-dom";
import facebook from "../../assets/img/facebook.svg";
import github from "../../assets/img/github.svg";
import twitter from "../../assets/img/twitter.svg";
import linkedin from "../../assets/img/linkedin.svg";
import "./about.css";

export const About = () => {
  return (
    <div className="about">
      <h3 className="about-heading">What I do!</h3>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum
        augue erat ac eros. Cras ultricies mattis convallis.
        <span className="about-450">
          {" "}
          Nullam non turpis eget sapien mattis eleifend non vel tortor. Maecenas
          at nibh ipsum. Integer .
        </span>
      </p>
      <Link className="about-link" to="/">
        Explore me <button className="about-btn"></button>
      </Link>
      <div className="about-socials">
        <a href="https://facebook.com" rel="noreferrer" target="_blank">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://github.com" rel="noreferrer" target="_blank">
          <img src={github} alt="Github" />
        </a>
        <a href="https://twitter.com" rel="noreferrer" target="_blank">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="https://linkedin.com" rel="noreferrer" target="_blank">
          <img src={linkedin} alt="Linkedin" />
        </a>
      </div>
    </div>
  );
};
