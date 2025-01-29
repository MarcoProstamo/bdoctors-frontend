import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparant">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-2">
          <i className="fa-solid fa-notes-medical fa-xl"></i> BDoctors
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/doctors" className="nav-link" end>
                Dottori
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/doctors/add" className="nav-link" end>
                Registrati
              </NavLink>
            </li>
          </ul>
          <div className="flex-grow-1 text-end me-2">
            <i className="fa-solid fa-user avatar"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
