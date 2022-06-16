import React, { useState, useEffect, useDisclosure } from 'react';
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { Flex, Spacer, Box, Grid } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, light } from '@fortawesome/fontawesome-svg-core/import.macro'
import Logo from '../assets/images/logo.svg';
import { Button, Modal, Row, Col } from 'react-bootstrap';

export default function HomeItem(props) {
    switch(props.type) {
        case "page":
            return (
                <Link to={props.link}>
                    <div className="homeItem">
                        <h1>{props.title}</h1>
                        <p>{props.desc}</p>
                    </div>
                </Link>
            );
        case "portfolio":
            return (
                <Link to={props.link}>
                <div className="homeItem project">
                    <Row>
                        <Col xs={12} md={8}>
                            <h1>{props.title}</h1>
                            <p>{props.desc}</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <img src={props.img} />
                        </Col>
                    </Row>
                </div>
            </Link>
            );
        case "exp":
            return (
                <a href={props.link} rel="noreferrer" target="_blank">
                    <div className="homeItem experience">
                        <Row>
                            <Col xs={12} md={6}>
                                <h1>{props.title}</h1>
                                <p>{props.desc}</p>
                            </Col>
                            <Col xs={12} md={6}>
                                <p className="timing">{props.time}</p>
                            </Col>
                        </Row>
                    </div>
                </a>
            );
        default:
            return(<></>);
    }
  }