import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon Landing Page",
    description:
      "A responsive Landing page for a restaurant using HTML and CSS",
    getImageSrc: () => require("../images/landingpage.png"),
  },
  {
    title: "Portfolio",
    description:
      "A scrollable Portfolio which includes all related information using React",
    getImageSrc: () => require("../images/portfolio.png"),
  }
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="white"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(1,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
