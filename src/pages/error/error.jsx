import { Link } from "react-router-dom";
import error from "../../assets/img/404.png";
import "./error.css";

const Error = () => {
  return (
    <div className="error">
      <div className="error-inner">
        <img className="error-img" src={error} alt="Error 404" />
        <h2 className="error-heading">Page not found - 404</h2>
        <p className="error-text">
          This page not found (deleted or never exists).
          <br />
          Try a phrase in search box or back to home and start again.
        </p>
        <Link className="error-link" to="/">
          Take me home! <span className="error-arrow"></span>
        </Link>
      </div>
    </div>
  );
};

export default Error;
