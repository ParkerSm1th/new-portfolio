import React, { useState, useEffect, useDisclosure } from "react";
import { Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";
import { Flex, Spacer, Box, Grid } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  light,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import Logo from "../assets/images/logo.svg";
import { Button, Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
import NavItem from "./NavItem";

export default function NavDialog() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  const handleShow = () => {
    setShow(true);
    setPages(pageDefaults);
  };

  const pageDefaults = [
    {
      name: "Socials",
      type: "divider",
    },
    {
      name: "Github",
      link: "https://github.com/parkersm1th",
      type: "link",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/parkersm1th",
      type: "link",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/parkersm1th/",
      type: "link",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/parkersm1th/",
      type: "link",
    },
  ];

  const pageSearches = [
    {
      name: "Warzone Ranks",
      link: "./wzranks",
      type: "page",
    },
    {
      name: "Groupiz",
      link: "./grpiz",
      type: "page",
    },
    {
      name: "KeyFM",
      link: "./keyfm",
      type: "page",
    },
    {
      name: "Contact Me",
      link: "./contact",
      type: "page",
    },
    {
      name: "About Me",
      link: "./about",
      type: "page",
    },
    {
      name: "Repositories",
      link: "./repos",
      type: "page",
    },
    {
      name: "Github",
      link: "https://github.com/parkersm1th",
      type: "link",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/parkersm1th",
      type: "link",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/parkersm1th/",
      type: "link",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/parkersm1th/",
      type: "link",
    },
    {
      name: "Resume",
      link: "https://parkersmith.io/ParkerSmithResume.pdf",
      type: "link",
    },
  ];

  const [pages, setPages] = useState(pageDefaults);

  React.useEffect(() => {
    function keyListener(e) {
      if (e.keyCode === 27) {
        handleClose();
      }
      if (e.keyCode === 75 && e.metaKey) {
        handleShow();
      }
      if (show && e.keyCode === 13) {
        if (pages[0].type === "page") {
          navigate(pages[0].link);
          handleClose();
        }
      }
      if (e.keyCode >= 49 && e.keyCode <= 57 && e.metaKey && e.altKey) {
        if (pageDefaults[e.keyCode - 49].type == "page") {
          navigate(pageDefaults[e.keyCode - 49].link);
        } else {
          console.log(pageDefaults[e.keyCode - 49].link);
          window.open(pageDefaults[e.keyCode - 48].link, "_blank");
        }
      }
      if (e.keyCode === 74 && e.metaKey) {
        navigate("/");
      }
    }

    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  });

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.text}
    </Tooltip>
  );

  const onInputSearch = (input) => {
    let inputVal = input.target.value.toLowerCase();
    //console.log(inputVal);
    if (inputVal === "" || inputVal == null) {
      setPages(pageDefaults);
    } else {
      setPages(
        pageSearches.filter(
          (page) =>
            page.name.toLowerCase().includes(inputVal) || page.type == "divider"
        )
      );
    }
  };

  return (
    <>
      <div className="navSmall">
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip({ text: "⌘ + K" })}
        >
          <div className="navButton" onClick={handleShow}>
            <FontAwesomeIcon icon={light("bars")} />
          </div>
        </OverlayTrigger>
      </div>
      <div className="navBig">
        <ul>
          <li>
            <a
              href="https://github.com/parkersm1th"
              target="_blank"
              rel="noreferrer"
            >
              <div className="smallNavButton">
                <i className="fab fa-github"></i>
              </div>
            </a>
          </li>
          <li>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip({ text: "⌘ + K" })}
            >
              <div className="smallNavButton" onClick={handleShow}>
                <i class="fa-solid fa-bars"></i>
              </div>
            </OverlayTrigger>
          </li>
        </ul>
      </div>

      <Modal show={show} onHide={handleClose}>
        <input
          autoFocus
          onChange={onInputSearch}
          placeholder="Search Pages (Ex. About Me)"
          class="searchInput"
        />
        <ul className="navItems">
          {pages.map((page) => (
            <NavItem
              type={page.type}
              name={page.name}
              link={page.link}
              handleClose={handleClose}
            />
          ))}
        </ul>
      </Modal>
    </>
  );
}
