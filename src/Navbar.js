import { Link } from "react-router-dom";

// sfc for a arrow funtion
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>bloooooooog</h1>
      <div className="links">
        <Link to="/">home</Link>
        <Link to="/create">new blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
