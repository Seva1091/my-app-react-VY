import "../../App.scss";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h2>404 Not Found</h2>
      <Link className="link404" to="/">
        Click to homepage
      </Link>
    </>
  );
};
