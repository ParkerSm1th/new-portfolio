import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import Logo from "../assets/images/logo.svg";

import NavDialog from "./NavDialog";

export function Nav() {
  return (
    <Box className="navBar">
      <Flex>
        <Box w="70px" h="60">
          <NavLink to="/">
            <div className="logoContainer">
              <div className="rotatingBorder"></div>
              <img alt="P Logo" src={Logo} />
            </div>
          </NavLink>
        </Box>
        <Spacer />
        <Box w="70px" h="60"></Box>
        <Spacer />
        <Box w="70px" h="60">
          <NavDialog />
        </Box>
      </Flex>
    </Box>
  );
}
