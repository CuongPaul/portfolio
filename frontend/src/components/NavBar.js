import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

// import logo from "../assets/img/logo.svg";
// import skype from "../assets/img/skype.svg";
// import slack from "../assets/img/slack.svg";
// import github from "../assets/img/github.svg";
// import reddit from "../assets/img/reddit.svg";
// import tiktok from "../assets/img/tiktok.svg";
// import discord from "../assets/img/discord.svg";
// import youtube from "../assets/img/youtube.svg";
// import twitter from "../assets/img/twitter.svg";
// import linkedin from "../assets/img/linkedin.svg";
// import facebook from "../assets/img/facebook.svg";
// import telegram from "../assets/img/telegram.svg";
// import instagram from "../assets/img/instagram.svg";
import MyResume from "../assets/pdf/Software_Engineer-Vuong_Ta_Cuong.pdf";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={logo} alt="Logo" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              {/* <div className="social-icon">
                <a href="#">
                  <img src={linkedin} alt="" />
                </a>
                <a href="#">
                  <img src={slack} alt="" />
                </a>
                <a href="#">
                  <img src={discord} alt="" />
                </a>
                <a href="#">
                  <img src={telegram} alt="" />
                </a>
                <a href="#">
                  <img src={skype} alt="" />
                </a>
                <a href="#">
                  <img src={github} alt="" />
                </a>
                <a href="#">
                  <img src={reddit} alt="" />
                </a>
                <a href="#">
                  <img src={facebook} alt="" />
                </a>
                <a href="#">
                  <img src={instagram} alt="" />
                </a>
                <a href="#">
                  <img src={twitter} alt="" />
                </a>
                <a href="#">
                  <img src={tiktok} alt="" />
                </a>
                <a href="#">
                  <img src={youtube} alt="" />
                </a>
              </div> */}
              <HashLink
                to={MyResume}
                target="_blank"
                rel="noreferrer"
                // download="Software_Engineer-Vuong_Ta_Cuong"
              >
                <button className="vvd">
                  <span>My Resume</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
