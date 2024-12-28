// Imports from react, Chakra UI
import React from 'react';
import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
// Function to create tNavbar
const Navbar = () => {
  return (
    // Container for Navbar where max width = 1140px, x padding = 4
    <Container maxW="1140px" px={4} bg={"gray.900"}>
      {/* Flex layout for Navbar */}
      <Flex h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{base:"column", sm:"row"}} 
      >
        {/* Store Application header with link to hom epage */}
        <Text fontSize={{base: "22", sm: "28"}}
              fontWeight={"bold"}
              textTransform={"uppercase"}
              textAlign={"center"}
              color='cyan.400'
              >
          <Link to={"/"}>Store Application</Link>
        </Text>
        {/* Stack for button to take you to the page for creating a new item */}
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};
// Export the Navbar
export default Navbar;