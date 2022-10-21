import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ContactItem from "../components/ContactItem";

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="pageTitle">
        <h1>Contact</h1>
        <h2>Ready to start a project? Just have a question? Let's chat.</h2>
      </div>
      <h1 className="homeSeparator">PROFESSIONAL</h1>
      <Row className="homeJumbo">
        <Col xs={12} md={6}>
          <ContactItem
            link="mailto:me@parkersmith.io"
            title="Email"
            desc="Shoot me an Email."
            icon="fa-solid fa-at"
          />
        </Col>
        <Col xs={12} md={6}>
          <ContactItem
            link="https://github.com/parkersm1th"
            title="GitHub"
            desc="Follow me on GitHub."
            icon="fab fa-github"
          />
        </Col>
        <Col xs={12} md={6}>
          <ContactItem
            link="https://linkedin.com/in/parkersm1th"
            title="LinkedIn"
            desc="Reach out to me on LinkedIn."
            icon="fab fa-linkedin"
          />
        </Col>
      </Row>
      <h1 className="homeSeparator">SOCIALS</h1>
      <Row className="homeJumbo">
        <Col xs={12} md={6}>
          <ContactItem
            link="https://twitter.com/parkersm1th"
            title="Twitter"
            desc="Follow me on Twitter to see what I'm up to."
            icon="fab fa-twitter"
          />
        </Col>
        <Col xs={12} md={6}>
          <ContactItem
            link="https://instagram.com/parkersm1th"
            title="Instagram"
            desc="Follow me on Instagram."
            icon="fab fa-instagram"
          />
        </Col>
        <Col xs={12} md={6}>
          <ContactItem
            link="https://open.spotify.com/user/parkermandfw?si=ba15d3ef6ac74018"
            title="Spotify"
            desc="See what I'm listening to."
            icon="fab fa-spotify"
          />
        </Col>
      </Row>
    </div>
  );
}
