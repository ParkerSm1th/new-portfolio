import React, { useState, useEffect, useDisclosure } from 'react';
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { Flex, Spacer, Box, Grid } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, light } from '@fortawesome/fontawesome-svg-core/import.macro'
import Logo from '../assets/images/logo.svg';
import { Button } from 'react-bootstrap';

import NavDialog from './NavDialog';


export function Nav() {


  return (
    <Box className="navBar">
        <Flex>
            <Box w='70px' h='60'>
                <NavLink to="/">
                    <div className="logoContainer">
                        <div className="rotatingBorder"></div>
                        <img alt="P Logo" src={Logo} />
                    </div>
                </NavLink>
            </Box>
            <Spacer />
            <Box w='70px' h='60'>
            </Box>
            <Spacer />
            <Box w='70px' h='60'>
                <NavDialog />
            </Box>
        </Flex>

    </Box>
  );
}
