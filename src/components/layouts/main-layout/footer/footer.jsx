import { Link } from "react-router-dom";
import flogo from "../../../../assets/img/flogo.svg";
import flogoMini from "../../../../assets/img/flogo-mini.svg";
import { Container } from "../../../container";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-wrapper">
          <Link className="footer-logo" to="/">
            <picture className="footer-img">
              <source media="(min-width: 650px)" srcSet={flogo} />
              <source media="(min-width: 220px)" srcSet={flogoMini} />
              <img className="footer-img" src={flogo} alt="Site Logo" />
            </picture>
          </Link>

          <div className="footer-inner">
            <div className="footer-inner-wrapper">
              <h3 className="footer-heading">Fight with me on:</h3>
              <Link className="footer-link" to="/">
                Twitter
              </Link>

              <a
                className="footer-link footer-link--active"
                href="https://instagram.com/golden_efrat99"
                rel="noreferrer"
                target="_blank"
              >
                Instagram
              </a>

              <a
                className="footer-link"
                href="https://t.me/Fast_hand_Ling"
                rel="noreferrer"
                target="_blank"
              >
                Telegram
              </a>

              <a
                className="footer-link"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                rel="noreferrer"
                target="_blank"
              >
                Youtube
              </a>

              <Link className="footer-link" to="/">
                Figma
              </Link>
            </div>
            <div className="footer-inner-wrapper">
              <h3 className="footer-heading">What i have done:</h3>
              <a
                className="footer-link"
                href="https://uzedu.uz"
                rel="noreferrer"
                target="_blank"
              >
                Xalq kutubxonasi
              </a>

              <Link className="footer-link footer-link--active" to="/">
                Websitee
              </Link>

              <Link className="footer-link" to="/">
                Website
              </Link>

              <a
                className="footer-link"
                href="https://googleplay.com"
                rel="noreferrer"
                target="_blank"
              >
                play market
              </a>

              <a
                className="footer-link"
                href="https://appstore.com"
                rel="noreferrer"
                target="_blank"
              >
                App store
              </a>
            </div>
            <div className="footer-inner-wrapper footer-inner-right">
              <a
                className="footer-link"
                href="https://t.me/Fast_hand_Ling"
                rel="noreferrer"
                target="_blank"
              >
                Contact
              </a>
              <a
                className="footer-link footer-link--active footer-blog"
                href="https://t.me/Fast_hand_Ling"
                rel="noreferrer"
                target="_blank"
              >
                Blog
              </a>
              <Link className="footer-link" to="">
                Dribble
              </Link>
              <Link className="footer-link" to="">
                Behance
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
