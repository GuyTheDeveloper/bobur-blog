import { Link } from "react-router-dom";
import img from "../../assets/img/single.png";
import "./post-item.css";

export const PostItem = ({ post }) => {
  return (
    <div className="item">
      <div className="item-top">
        <span className="item-interface">User interface</span>
        <h3 className="item-heading">{post.title}</h3>
        <div className="item-wrapper">
          <span className="item-date">October 24, 2020</span>
          <span className="item-checked">3 minutes read</span>
        </div>
      </div>
      <img src={img} alt="Post" />
      <div className="item-content">
        <p className="item-body">{post.body}</p>

        <h4 className="item-inner-heading">Information overload</h4>

        <p className="item-lorem">
          Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit
          dignissim, mauris massa pellentesque augue, quis ultricies sem tortor
          et velit.
        </p>

        <blockquote className="item-quote">
          <p className="item-text">
            Sed commodo ligula vitae mollis tristique. Maecenas egestas semper
            mauris. Duis tempus blandit ultrices. Proin{" "}
            <Link to="/">elit.uz</Link> nulla, viverra id suscipit quis,
            tristique a dolor.
          </p>
          <cite className="item-owner">
            ‘Designing For Sustainability, Tim Frick, 2014'
          </cite>
        </blockquote>

        <h4 className="item-bottom">Lessons Learnt: Best Practice</h4>
        <ul className="item-list">
          <li className="item-info">
            Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem
            ultricies aliquam eu eu nisl. Suspendisse.
          </li>
          <li className="item-info">
            Maecenas sit amet ligula auctor neque aliquam placerat et ac neque.
            Proin risus eros, fringilla eu suscipit dignissim, dignissim.
          </li>
        </ul>
      </div>
    </div>
  );
};
