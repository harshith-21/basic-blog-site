import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>sorry</h2>
      <p>the page cannot be foumd</p>
      <Link to="/">Back to Homepage...</Link>
    </div>
  );
};

export default NotFound;
