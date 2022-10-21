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
import { Button, Modal, Row, Col } from "react-bootstrap";

export default function ContactItem(props) {
  return (
    <a href={props.link} target="_blank">
      <div className="homeItem">
        <div className="contactItemText">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
        <i className={`${props.icon} contactIcon`}></i>
      </div>
    </a>
  );
}
