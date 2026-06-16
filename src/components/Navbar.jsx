import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav
      className="w-full px-4 py-3 shadow-md"
      style={{
        backgroundColor: "var(--color-card)",
        color: "var(--color-text)",
      }}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <Link
          to="/"
          className="text-lg font-semibold cursor-pointer hover:text-pink-300"
        >
          Baltic Dry Index
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link to="/" className="hover:text-pink-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-pink-300">
            About
          </Link>
          <a
            href="https://github.com/jerwelz/Baltic-Dry-Index-App"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300"
          >
            Github
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
