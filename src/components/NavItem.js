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
import { Button, Modal } from "react-bootstrap";

export default function NavItem(props) {
  switch (props.type) {
    case "page":
      return (
        <NavLink to={props.link}>
          <li onClick={props.handleClose} className="navItem">
            <FontAwesomeIcon icon={light("arrow-right-long")} />{" "}
            <span className="moveTextRight">{props.name}</span>
          </li>
        </NavLink>
      );
    case "link":
      return (
        <a href={props.link} target="_blank" rel="noreferrer">
          <li onClick={props.handleClose} className="navItem">
            <FontAwesomeIcon icon={light("arrow-right-long")} />{" "}
            <span className="moveTextRight">{props.name}</span>{" "}
            <FontAwesomeIcon icon={solid("arrow-up-right-from-square")} />
          </li>
        </a>
      );
    case "divider":
      return (
        <li className="typeDivider">
          <p>{props.name}</p>
        </li>
      );
    default:
      return <></>;
  }
}
