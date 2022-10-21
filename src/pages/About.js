import React, { useState, useEffect } from "react";

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="pageTitle">
        <h1>About Me</h1>
        <h2>Learn more about who I am.</h2>
      </div>
      <div className="aboutMe">
        <h1 className="separator">Introduction</h1>
        <p>
          Hi! My name is Parker, and I am a student currently studying at{" "}
          <a
            href="https://colostate.edu"
            target="_blank"
            rel="noreferrer"
            className="skillLink"
          >
            Colorado State University
          </a>{" "}
          studying computer science and business to business sales.
          <br />
          <br />I am a passionate, hard-working, and dedicated individual who
          has a passion for problem solving, and creating user experiences. I
          have a strong background in web development, and I am always looking
          to learn new technologies and skills.
        </p>

        <h1 className="separator">Background</h1>
        <p>
          Growing up, I lived everywhere. Up until I was 12 I lived in multiple
          different towns in North Texas, then I moved to Amsterdam, NL, then
          the Bay Area, and now Fort Collins!
          <br />
          <br />
          Living in some many places I was always on the move and searched for
          something I was passionate about to keep me busy. When I was attending
          the{" "}
          <a
            href="https://isa.nl"
            target="_blank"
            rel="noreferrer"
            className="skillLink"
          >
            International School of Amsterdam
          </a>{" "}
          I was introduced to the world of programming. I was always interested
          how things were made, and how I could get involved, but after moving
          to Amsterdam is when I really took a deep dive into programming. I
          started with Minecraft Plugins, seeing how I could manipulate the
          block world, then quickly shifted to Web Development and have been
          hooked ever since.
        </p>
        <h1 className="separator">Goals</h1>
        <p>
          As a student studying Computer Science my ultimate goal is to become a
          software engineer, however, I am very interested in entrepreneurship
          and business to business sales. Throughout my college years I am
          hoping to gain as much experience as possible to set me up for success
          in the future.
        </p>
      </div>
    </div>
  );
}
