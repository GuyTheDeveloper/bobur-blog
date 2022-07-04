import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./post-card.css";

export const PostsCard = ({ post }) => {
  return (
    <div key={post.id} className="post">
      <div className="post-top">
        <span className="post-date">September 24.2020</span>
        <span className="post-type">
          {Math.random() > 0.5
            ? "Ui"
            : Math.random() < 0.5
            ? "Desing Theory"
            : "Ux"}
        </span>
      </div>
      <Link to={`/posts/${post.id}`}>
        <h3 className="post-text">{post.title}</h3>
      </Link>
      <span className="post-checked">
        <BiTimeFive className="post-icon" /> 3 minutes read
      </span>
    </div>
  );
};
