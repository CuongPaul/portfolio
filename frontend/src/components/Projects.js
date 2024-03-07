import "animate.css";
import TrackVisibility from "react-on-screen";
import { Col, Row, Container } from "react-bootstrap";

import { ProjectCard } from "./ProjectCard";
import spenmo from "../assets/img/spenmo.avif";
import wifiCaPhe from "../assets/img/wifi-ca-phe.png";
import storeLocator from "../assets/img/store-locator.webp";
import variantsOptions from "../assets/img/variants-options.webp";
import labelsAndBadges from "../assets/img/labels-and-badges.webp";
import socialNetworkWebsite from "../assets/img/social-network-website.webp";

export const Projects = () => {
  const projects = [
    {
      time: "2021 - 2022",
      imgUrl: labelsAndBadges,
      title: "Product Labels & Badges",
      description:
        "BSS Product Labels & Badges helps you motivate customers to purchase more with catchy labels and badges",
      link: "https://apps.shopify.com/product-labels-by-bss?surface_intra_position=1&surface_type=partners&surface_version=redesign",
    },
    {
      time: "2021 - 2022",
      imgUrl: storeLocator,
      title: "Dealer & Store Locator",
      description:
        "MAPPY allows you to add store locations individually or in bulk with CSV file",
      link: "https://apps.shopify.com/dealer-store-locator?surface_intra_position=6&surface_type=partners&surface_version=redesign",
    },
    {
      time: "2021 - 2022",
      imgUrl: variantsOptions,
      title: "Product Variants Options",
      description:
        "Product Variants & Options is an all-in-one customization solution that helps B2B and B2C businesses grow",
      link: "https://apps.shopify.com/product-options-by-bss?surface_intra_position=3&surface_type=partners&surface_version=redesign",
    },
    {
      time: "2022",
      imgUrl: spenmo,
      title: "Spenmo",
      link: "https://spenmo.com",
      description:
        "Spenmo is a spend management platform with smart corporate cards and AP automation to help businesses gain control and visibility over spending",
    },
    {
      imgUrl: wifiCaPhe,
      time: "2022 - 2023",
      title: "Wifi Cà Phê",
      link: "https://wificaphe.com",
      description:
        "Wifi Coffee is a tool to help order and pay at cafes, restaurants, and stores",
    },
    {
      time: "2023",
      imgUrl: socialNetworkWebsite,
      title: "Fansipan Social Network",
      link: "https://fansipan.onrender.com",
      description:
        "A social media platform allows users to create profiles, connect with friends and family, share updates, photos, videos, and links, join chat groups, and follow people of interest",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Some Things I've built so far</p>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
