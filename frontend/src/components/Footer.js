import { Col, Row, Container } from "react-bootstrap";

// import logo from "../assets/img/logo.svg";
import skype from "../assets/img/skype.svg";
import slack from "../assets/img/slack.svg";
import github from "../assets/img/github.svg";
import reddit from "../assets/img/reddit.svg";
import tiktok from "../assets/img/tiktok.svg";
import discord from "../assets/img/discord.svg";
// import { MailchimpForm } from "./MailchimpForm";
import youtube from "../assets/img/youtube.svg";
import twitter from "../assets/img/twitter.svg";
import linkedin from "../assets/img/linkedin.svg";
import facebook from "../assets/img/facebook.svg";
import telegram from "../assets/img/telegram.svg";
import instagram from "../assets/img/instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
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
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
