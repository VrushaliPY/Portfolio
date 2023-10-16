import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Vrushali!";
const bio1 = "A Passionate frontend developer";
const bio2 = "Specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <Avatar src="../images/vrushali.jpeg"
      size='2xl'
      name="vrushali"/>
      <Heading as='h3' size='md' noOfLiners={1}>{greeting}</Heading>

      <VStack spacing={6}>
      <Heading as='h2' size='3xl' noOfLiners={1}>{bio1}</Heading>
      <Heading as='h2' size='3xl' noOfLiners={1}>{bio2}</Heading>
      </VStack>


    </VStack>

  </FullScreenSection>
);

export default LandingSection;
