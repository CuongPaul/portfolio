import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import git from "../assets/img/git.svg";
import css3 from "../assets/img/css3.svg";
import html5 from "../assets/img/html5.svg";
import mysql from "../assets/img/mysql.svg";
import react from "../assets/img/react.svg";
import redis from "../assets/img/redis.svg";
import redux from "../assets/img/redux.svg";
import docker from "../assets/img/docker.svg";
import nestjs from "../assets/img/nestjs.svg";
import nodejs from "../assets/img/nodejs.svg";
import nextjs from "../assets/img/nextjs.svg";
import mongodb from "../assets/img/mongodb.svg";
import firebase from "../assets/img/firebase.svg";
import socketio from "../assets/img/socketio.svg";
import javascript from "../assets/img/javascript.svg";
import postgresql from "../assets/img/postgresql.svg";
import typescript from "../assets/img/typescript.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      items: 5,
      breakpoint: { max: 4000, min: 3000 },
    },
    desktop: {
      items: 3,
      breakpoint: { max: 3000, min: 1024 },
    },
    tablet: {
      items: 2,
      breakpoint: { max: 1024, min: 464 },
    },
    mobile: {
      items: 1,
      breakpoint: { max: 464, min: 0 },
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Technologies I've been working with recently</p>
              <Carousel
                infinite={true}
                responsive={responsive}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html5} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css3} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="Image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="Image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={nextjs} alt="Image" />
                  <h5>NextJS</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="Image" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={nestjs} alt="Image" />
                  <h5>NestJS</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={postgresql} alt="Image" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="Image" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={docker} alt="Image" />
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <img src={redis} alt="Image" />
                  <h5>Redis</h5>
                </div>
                <div className="item">
                  <img src={socketio} alt="Image" />
                  <h5>SocketIO</h5>
                </div>
                <div className="item">
                  <img src={firebase} alt="Image" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image" />
                  <h5>Git</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
