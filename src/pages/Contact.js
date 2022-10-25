/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ContactItem from "../components/ContactItem";

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactList = [
    {
      title: "Email",
      link: "mailto:me@parkersmith.io",
      icon: "fa-solid fa-at",
      desc: "Shoot me an Email.",
      type: 0,
    },
    {
      title: "GitHub",
      link: "https://github.com/parkersm1th",
      icon: "fab fa-github",
      desc: "Follow me on Github.",
      type: 0,
    },
    {
      title: "LinkedIn",
      link: "https://linkedin.com/in/parkersm1th",
      icon: "fab fa-linkedin",
      desc: "Reach out to me on LinkedIn.",
      type: 0,
    },
    {
      title: "Twitter",
      link: "https://twitter.com/parkersm1th",
      icon: "fab fa-twitter",
      desc: "Follow me on Twitter to see what I'm up to.",
      type: 1,
    },
    {
      title: "Instagram",
      link: "https://instagram.com/parkersm1th",
      icon: "fab fa-instagram",
      desc: "Follow me on Instagram.",
      type: 1,
    },
    {
      title: "Spotify",
      link: "https://open.spotify.com/user/parkermandfw?si=ba15d3ef6ac74018",
      icon: "fab fa-spotify",
      desc: "See what I'm listening to.",
      type: 1,
    },
  ];

  return (
    <div>
      <div className="pageTitle">
        <h1>Contact</h1>
        <h2>Ready to start a project? Just have a question? Let's chat.</h2>
      </div>
      <h1 className="homeSeparator">PROFESSIONAL</h1>
      <Row className="homeJumbo">
        {contactList.map((item) => {
          if (item.type === 0) {
            return (
              <Col xs={12} md={6}>
                <ContactItem
                  link={item.link}
                  title={item.title}
                  desc={item.desc}
                  icon={item.icon}
                />
              </Col>
            );
          }
        })}
      </Row>
      <h1 className="homeSeparator">SOCIALS</h1>
      <Row className="homeJumbo">
        {contactList.map((item) => {
          if (item.type === 1) {
            return (
              <Col xs={12} md={6}>
                <ContactItem
                  link={item.link}
                  title={item.title}
                  desc={item.desc}
                  icon={item.icon}
                />
              </Col>
            );
          }
        })}
      </Row>
    </div>
  );
}
