import * as React from 'react';
import { Box, Center, Container, CircularProgress, CircularProgressLabel, Heading, Wrap, WrapItem, SimpleGrid, Text, Progress } from '@chakra-ui/react';

import { FullViewportContainer } from '../full-viewport-container/full-viewport-container.jsx'

import skillsData from '../../assets/data/skills.js';

import './competences.css';
import bgImage from '../../assets/images/skills-cover.webp';

const skillsElement = skillsData.data.sort((a, b) => {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();
    if (aName < bName) {
        return -1; //nameA comes first
      }
      if (aName > bName) {
        return 1; // nameB comes first
      }
      return 0;  // names must be equal
}).map((e, i) => 
    <Center
        key={i}>
        <Box
            p="8px"
            borderRadius="8px"
            boxShadow="base"
            bg="azure"
            w="100%"
            maxW="410px"
            >
            <CircularProgress
                mr="8px"
                value={e.value}>
                <CircularProgressLabel>{e.value}%</CircularProgressLabel>
            </CircularProgress>
            <Text
                as="span"
                width="100%"
                margin="auto"
                >
                {e.name}
            </Text>
            <Progress
                mt="0.25em"
                mb="0.25em"
                h="0.5em"
                hasStripe
                value={e.value}
                />
        </Box>
    </Center>
);

export function Competences() {

    return <FullViewportContainer id="competences">
        <div
            className="bg-image"
            style={{
                backgroundImage: `url(${bgImage})`
            }}
            ></div>
        <Container 
            maxW="6xl"
            className="container bg-container"
            boxShadow="dark-lg"
            >
            <Center>
                <Heading>Compétences</Heading>
            </Center>
            <Box mt="1em" maxW="100%">
                <Center w="100%">
                    <SimpleGrid
                        className="grid-container"
                        minChildWidth="200px"
                        spacing="10px"
                        >
                        {skillsElement}
                    </SimpleGrid>
                </Center>
            </Box>
        </Container>
    </FullViewportContainer>
}