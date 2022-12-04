import React from "react";
import "./Nav.css";
import logo1 from "./Assets/images/logo 1.png";
const Nav = () => {
  return (
    <div>
      <nav>
        <div>
          <img className="scarees" src={logo1} />
        </div>

        <div className="links">
          <div className="postinol">
            <a className="post" href="">
              Post job
            </a>
            <a className="programs" href="">
              Programs
            </a>
          </div>
          <div className="postinol">
            <a className="service" href="">
              Services
            </a>
            <a className="pricing" href="">
              Pricing
            </a>
          </div>
        </div>

        <div className="logs">
          <a className="login" href="">
            Login
          </a>
          <a className="signup" href="">
            Sign up
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
