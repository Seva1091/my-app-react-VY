import "../../App.scss";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h2>404 Not Found</h2>
      <div className="container404">
        <Link to="/">Click to homepage</Link>
      </div>
    </>
  );
};
