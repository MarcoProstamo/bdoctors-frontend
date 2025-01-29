import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row border-bottom pb-4">
          {/* Logo */}
          <div className="col-md-3 mb-3 fs-1">
            <i className="fa-solid fa-notes-medical fa-xl"></i> BDoctors
          </div>

          {/* Support */}
          <div className="col-md-3 mb-3">
            <h5 className="text-secondary">SUPPORT</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Help Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Support Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Don't Sell or Share My Info
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="col-md-3 mb-3">
            <h5 className="text-secondary">ABOUT</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  BDoctors
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-3">
            <h5 className="text-secondary">FIND US ON SOCIAL MEDIA</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-4">
                <i className="fab fa-discord"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-twitch"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Download App */}
        <div className="text-center my-4">
          <h5 className="text-secondary">DOWNLOAD THE BDoctors APP</h5>
          <div className="d-flex justify-content-center gap-3 mt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="img-fluid"
              style={{ height: "50px" }}
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-secondary border-top pt-3">
          <p>© 1764-2069 BDOCTORS LLC | ALL RIGHTS RESERVED</p>
          <p className="small">
            Doctors, BDoctors, and all related trademarks are property of
            BDoctors.
          </p>
          <div className="d-flex justify-content-center gap-4">
            <a href="#" className="text-light text-decoration-none">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-light text-decoration-none">
              TERMS OF SERVICE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
