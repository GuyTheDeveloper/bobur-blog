import React from "react";
import { About } from "../../components/about";
import "./home.css";
import ReactPaginate from "react-paginate";
import { PostsCard } from "../../components";
import { useSearch } from "../../hooks/useSearch";

const Home = () => {
  const [posts, setPosts] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(0);
  const { query } = useSearch();

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err.message));
  }, []);

  const postsPerPage = 20;
  const pagesVisited = pageNumber * postsPerPage;

  const displayPosts = posts
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
    .map((post) => <PostsCard post={post} key={post.id} />);

  const pageCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="home">
      <About />
      <div className="home-content">
        <h2 className="home-heading">Recent posts</h2>
        <div>{displayPosts}</div>
        <div className="home-inner-wrapper">
          <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="pagination"
            previousLinkClassName="prev-btn"
            nextLinkClassName="next-btn"
            disabledClassName="pagination-disabled"
            activeClassName="pagination--active"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
