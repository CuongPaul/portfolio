import { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Col, Nav, Row, Container } from "react-bootstrap";

import "animate.css";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const period = 2000;
  const toRotate = ["Hello 👋, I'm Ta Cuong, Software Engineer"];

  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const tick = () => {
    const fullText = toRotate[loopNum % toRotate.length];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setDelta(period);
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setDelta(500);
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => tick(), delta);

    return () => clearInterval(ticker);
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Software Engineer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Be a logical, process-focused person with a pragmatic
                    approach to problem-solving and motivated to get things
                    done, even in stressful environments. With nearly 3 years of
                    experience in programming on many technologies with
                    different projects. In addition, I am an inquisitive person,
                    like to take on challenges, and really care about
                    implementing and designing large systems. In the long term,
                    I want to try new situations and increase my skills and
                    experience
                  </p>
                  <Nav.Link href="#contact">
                    <button>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </Nav.Link>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
