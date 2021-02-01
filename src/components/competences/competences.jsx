import * as React from 'react';
import { Box, Center, Container, CircularProgress, CircularProgressLabel, Heading, Wrap, WrapItem } from '@chakra-ui/react';

import { FullViewportContainer } from '../full-viewport-container/full-viewport-container.jsx'

import skillsData from '../../assets/data/skills.js';

import './competences.css';

const skillsElement = skillsData.data.map((e, i) => 
    <WrapItem>
        <Box
            p="8px"
            borderRadius="8px"
            boxShadow="base"
            bg="azure"
            key={i}
            >
            <CircularProgress mr="8px" value={e.value}>
                <CircularProgressLabel>{e.value}%</CircularProgressLabel>
            </CircularProgress>
            {e.name}
        </Box>
    </WrapItem>
);

export function Competences() {

    return <FullViewportContainer id="realisations">
        <Container 
            maxW="95%"
            className="container"
            >
            <Center>
                <Heading>Compétences</Heading>
            </Center>
            <Box mt="1em" maxW="100%">
                <Center>
                    <Wrap
                        className="competences-container"
                        justify="center">
                        {skillsElement}
                    </Wrap>
                </Center>
            </Box>
        </Container>
    </FullViewportContainer>
}