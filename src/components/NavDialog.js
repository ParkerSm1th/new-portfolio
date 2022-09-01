import React, { useState, useEffect, useDisclosure } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
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
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    function keyListener(e) {
      if (e.keyCode === 27) {
        handleClose();
      }
      if (e.keyCode === 75 && e.metaKey) {
        handleShow();
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

  return (
    <>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip({ text: "⌘ + K" })}
      >
        <div className="navButton" onClick={handleShow}>
          <FontAwesomeIcon icon={light("bars")} />
        </div>
      </OverlayTrigger>

      <Modal show={show} onHide={handleClose}>
        <input placeholder="Search Pages (Ex. About Me)" class="searchInput" />
        <ul className="navItems">
          <li className="typeDivider">
            <p>Pages</p>
          </li>
          <NavItem type="page" name="Home" link="/" handleClose={handleClose} />
          <NavItem
            type="page"
            name="About"
            link="/about"
            handleClose={handleClose}
          />
          <NavItem
            type="page"
            name="Repositories"
            link="/repos"
            handleClose={handleClose}
          />
          <NavItem
            type="page"
            name="Toolbox"
            link="/tools"
            handleClose={handleClose}
          />
          <NavItem
            type="page"
            name="Projects"
            link="/projects"
            handleClose={handleClose}
          />
          <NavItem
            type="page"
            name="Contact"
            link="/contact"
            handleClose={handleClose}
          />
          <li className="typeDivider">
            <p>Socials</p>
          </li>
          <NavItem
            type="link"
            name="Github"
            link="https://github.com/parkersm1th"
            handleClose={null}
          />
          <NavItem
            type="link"
            name="Twitter"
            link="https://twitter.com/parkersm1th"
            handleClose={null}
          />
          <NavItem
            type="link"
            name="Linkedin"
            link="https://www.linkedin.com/in/parkersm1th/"
            handleClose={null}
          />
          <NavItem
            type="link"
            name="Instagram"
            link="https://www.instagram.com/parkersm1th/"
            handleClose={null}
          />
        </ul>
      </Modal>
    </>
  );
}
