import React from "react";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
import logo from "../../assets/GPT-3.png";
import "./navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <>
      <div className="gbt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gbt3__navbar-links_logo">
            <img src={logo} alt="" />
          </div>
          <div className="gbt3__navbar-links_container">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#wgbt3">What is GBT3</a>
            </p>
            <p>
              <a href="#possibiity">Open Ai</a>
            </p>
            <p>
              <a href="#features">Case Studies</a>
            </p>
            <p>
              <a href="#blog">Library</a>
            </p>
          </div>
        </div>
        <div className="gbt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sing up</button>
        </div>

        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseFill
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#wgbt3">What is GBT3</a>
                </p>
                <p>
                  <a href="#possibiity">Open Ai</a>
                </p>
                <p>
                  <a href="#features">Case Studies</a>
                </p>
                <p>
                  <a href="#blog">Library</a>
                </p>
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
