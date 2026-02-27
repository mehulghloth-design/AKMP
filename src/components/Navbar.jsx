import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Accessible Knowledge Management Portal</h2>
      <Link to="/">Home</Link>
    </nav>
  );
}

export default Navbar;