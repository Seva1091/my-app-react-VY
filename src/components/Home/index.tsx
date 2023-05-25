import "../../App.scss";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <nav className="nav">
        <div>
          <Link to="/posts">Posts</Link>
        </div>
        <div>
          <Link to="/posts/1">1st post</Link>
        </div>
        <div>
          <Link to="/posts/new">Create post</Link>
        </div>
        <div>
          <Link to="/register">Register</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <h2 className="header">Homepage</h2>
    </>
  );
};
