import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container py-4">
        <div className="left-footer">
          <NavLink className="text-decoration-none" to={"/about"}>
            <span className="fs-5">About</span>
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
