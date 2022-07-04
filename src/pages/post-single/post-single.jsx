import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostItem, PostsCard, SingleSider } from "../../components";
import "./post-single.css";

const PostSingle = () => {
  const [post, setPost] = useState({});
  const [posts, setPosts] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => err.message);
  }, [postId]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="single">
      <SingleSider />
      <div className="single-inner">
        <PostItem post={post} />
        <div className="single-content">
          <h3 className="heading-more">More like this</h3>
          {posts.slice(7, 10).map((post) => (
            <PostsCard post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostSingle;
