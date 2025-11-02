import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import ThemeContext from "../context/ThemeContext";
import { contact } from "../data/profile";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
];

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="top-nav">
      <div className="top-nav__inner">
        <Link to="/" className="nav-brand" aria-label="Go to home">
          Prabu Jayant
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="nav-inline-link" href={contact.email}>
            Say hello
          </a>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
