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

export default function RepoItem(props) {
  let languageIcon = "";
  switch (props.language) {
    case "JavaScript":
      languageIcon = "fa-brands fa-square-js";
      break;
    case "Java":
      languageIcon = "fa-brands fa-java";
      break;
    case null:
      languageIcon = "fa-brands fa-markdown";
      break;
    default:
      break;
  }

  const truncate = (input) =>
    input.length > 90 ? `${input.substring(0, 90)}...` : input;

  switch (props.type) {
    case "page":
      return (
        <a href={props.link} target="_blank" rel="noreferrer">
          <div className="homeItem repoItem">
            <h1 className="repoLink">
              parkersm1th/<span className="repoLinkReal">{props.title}</span>
            </h1>
            <p>{truncate(props.desc)}</p>
            <Row className="repoStats">
              <Col xs={8}>Language:</Col>
              <Col className="textAlignRight" xs={4}>
                <i class={languageIcon}></i>
              </Col>
              <Col xs={8}>License:</Col>
              <Col className="textAlignRight" xs={4}>
                {props.license}
              </Col>
            </Row>
          </div>
        </a>
      );
    case "loader":
      return (
        <a href={props.link} target="_blank" rel="noreferrer">
          <div className="homeItem repoItem">
            <h1 className="repoLink loadingFill">parkersm1th/gitHubLink</h1>
            <p className="loadingFill">Long long long fake description</p>
            <p className="loadingFill">Shorter area here</p>
            <Row className="repoStats">
              <Col xs={8}>
                <p className="loadingFill">Language:</p>
              </Col>
              <Col className="textAlignRight" xs={4}>
                <p className="loadingFill">123</p>
              </Col>
              <Col xs={8}>
                <p className="loadingFill">License:</p>
              </Col>
              <Col className="textAlignRight" xs={4}>
                <p className="loadingFill">123</p>
              </Col>
            </Row>
          </div>
        </a>
      );
    default:
      return <></>;
  }
}
