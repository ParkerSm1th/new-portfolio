import React, { useState, useEffect } from "react";
import { useLanyard } from "react-use-lanyard";
import { Container, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

// Components
import HomeItem from "../components/HomeItem";
import Techs from "../components/HomeComponents/Tech/Techs";

// Images
import Sticker from "../assets/images/Sticker.png";
import StickerSleep from "../assets/images/StickerSleep.png";
import StickerOnline from "../assets/images/StickerOnline.png";
import StickerSpotify from "../assets/images/StickerSpotify.png";
import WZRanks from "../assets/images/WZRanksLogo.svg";
import GrpizLogo from "../assets/images/GroupizLogo.png";
import KeyFMLogo from "../assets/images/KeyFMLogo.png";

export function Home() {
  const [count, setCount] = useState(0);
  const { loading, status /*, websocket */ } = useLanyard({
    userId: "212630637365035009",
    socket: true,
  });

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const progressUpdate = setInterval(() => {
      if (loading || !status.listening_to_spotify) return;
      const total =
        status.spotify.timestamps.end - status.spotify.timestamps.start;
      setProgress(
        100 -
          (100 * (status.spotify.timestamps.end - new Date().getTime())) / total
      );
    }, 900);

    return () => clearInterval(progressUpdate);
  });

  let sticker = StickerOnline;
  let discordClass = "offline";
  let discordText = "Offline";
  let discordShow = "";
  let spotify = null;
  let song = "";
  let songLink = "/";
  let artist = "";
  let songProgress = 0;
  let listeningSpotify = "hide";
  if (!loading) {
    discordShow = "discordShown";
    if (status.discord_status === "dnd") {
      sticker = StickerOnline;
      discordClass = "online";
      discordText = "Online";
    } else if (status.discord_status === "online") {
      sticker = Sticker;
      discordClass = "online";
      discordText = "Online";
    } else {
      sticker = StickerSleep;
      discordClass = "offline";
      discordText = "Offline";
    }

    if (status.listening_to_spotify) {
      discordText = "Online, listening to Spotify";
      listeningSpotify = "show";
      sticker = StickerSpotify;
      spotify = status.spotify;
      song = spotify.song;
      artist = spotify.artist;
      songLink = "spotify:track:" + spotify.track_id;
    }
  }

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.text}
    </Tooltip>
  );

  return (
    <div className="homePageContainer">
      <Row className="flex-column-reverse flex-md-row homeJumbo">
        <Col xs={12} md={8} className="homeBig">
          <h1>Parker Smith</h1>
          <h2>
            <a
              href="https://www.w3schools.com/whatis/whatis_fullstack_js.asp?utm_source=parkersmith.io"
              target="_blank"
              rel="noreferrer"
              className="skillLink"
            >
              Full-Stack
            </a>{" "}
            Software Engineer
          </h2>
          <p>
            Hi! I'm Parker Smith. I'm a Computer Science student at Colorado
            State who has a passion for development and creating user
            experiences. I build complex apps using tools like the{" "}
            <a
              href="https://www.mongodb.com/mern-stack"
              target="_blank"
              rel="noreferrer"
              className="skillLink"
            >
              MERN
            </a>{" "}
            stack,{" "}
            <a
              href="https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html"
              target="_blank"
              rel="noreferrer"
              className="skillLink"
            >
              Java
            </a>
            , and{" "}
            <a
              href="https://php.net"
              target="_blank"
              rel="noreferrer"
              className="skillLink"
            >
              PHP
            </a>
          </p>
          <div className="discordStatus">
            <div className={`discordHider ${discordShow}`}></div>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip({ text: "Discord Status" })}
            >
              <div className={`discordIcon ${discordClass}`}></div>
            </OverlayTrigger>
            <div className="discordStatusText">
              <a href={`${songLink}`} rel="noreferrer">
                <p>{discordText}</p>
              </a>
            </div>
          </div>
        </Col>
        <Col xs={4}>
          <div className="stickerDiv">
            <img className="sticker" src={sticker} />
          </div>
          <div className={`spotify ${listeningSpotify}`}>
            <a href={`${songLink}`} rel="noreferrer">
              <h1>{song}</h1>
            </a>
            <h2>{artist}</h2>
            <div className="songBar">
              <div
                style={{ width: `${progress}%` }}
                className="progressBar"
              ></div>
            </div>
          </div>
        </Col>
      </Row>
      <h1 className="homeSeparator">ME</h1>
      <Row className="homeJumbo">
        <Col xs={12} md={6}>
          <HomeItem
            link="/about"
            title="About Me"
            desc="Want to learn a bit more about me and how I got into development?"
            type="page"
          />
        </Col>
        <Col xs={12} md={6}>
          <HomeItem
            link="/contact"
            title="Contact"
            desc="Ready to start a project? Just have a question? Let's chat."
            type="page"
          />
        </Col>
        <Col xs={12} md={6}>
          <HomeItem
            link="https://parkersmith.io/ParkerSmithResume.pdf"
            title="Resume"
            desc="Interested in learning everything about me in 1 page? Check out my resume."
            type="pagelink"
          />
        </Col>
      </Row>
      <h1 className="homeSeparator">PROJECTS</h1>
      <Row className="homeJumbo">
        <Col xs={12} md={6}>
          <HomeItem
            link="/wzranks"
            title="WarzoneRanks"
            desc="One of my biggest projects reaching over 50k active users."
            img={WZRanks}
            type="portfolio"
          />
        </Col>
        <Col xs={12} md={6}>
          <HomeItem
            link="/grpiz"
            title="Groupiz"
            desc={[
              "A ",
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noreferrer"
                className="skillLink"
              >
                NodeJS
              </a>,
              " app I created to help take group quizzes.",
            ]}
            img={GrpizLogo}
            type="portfolio"
          />
        </Col>
        <Col xs={12} md={6}>
          <HomeItem
            link="/keyfm"
            title="KeyFM"
            desc={[
              "A ",
              <a
                href="https://php.net"
                target="_blank"
                rel="noreferrer"
                className="skillLink"
              >
                PHP
              </a>,
              " website I created for online radio.",
            ]}
            img={KeyFMLogo}
            type="portfolio"
          />
        </Col>
        <Col xs={12} md={6} className="">
          <HomeItem
            link="/repos"
            title="Repositories"
            desc="Feel free to check out all of my other work and public projects."
            type="page"
          />
        </Col>
      </Row>

      <h1 className="homeSeparator">TECHNOLOGIES I USE</h1>
      <Row className="homeJumbo">
        <Techs></Techs>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <h1 className="homeSeparator">EXPERIENCE</h1>
          <Row className="homeJumbo">
            <HomeItem
              link="https://parkersmith.io"
              title="Parker Smith"
              desc="Freelance Developer"
              time="2018-"
              type="exp"
            />
            <HomeItem
              link="https://mcparks.us"
              title="MCParks"
              desc="Java Developer"
              time="2022-"
              type="exp"
            />
            <HomeItem
              link="https://palaceinteractive.net"
              title="Palace Interactive"
              desc="Lead Developer"
              time="2018-2021"
              type="exp"
            />
            <HomeItem
              link="https://lighthousemedia.net"
              title="Lighthouse Dev."
              desc="Co-Founder"
              time="2016-2019"
              type="exp"
            />
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <h1 className="homeSeparator">EDUCATION</h1>
          <Row className="homeJumbo">
            <HomeItem
              link="https://compsci.colostate.edu/"
              title="CS Student"
              desc="Colorado State University"
              time="2022-"
              type="exp"
            />
            <HomeItem
              link="https://saratogahigh.org"
              title="High School Student"
              desc="Saratoga High School"
              time="2018-2022"
              type="exp"
            />
            <HomeItem
              link="https://isa.nl"
              title="IB Student"
              desc="Int. School of Amsterdam"
              time="2016-2018"
              type="exp"
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
}
