import * as React from 'react';
import { Box, Center, Container, CircularProgress, CircularProgressLabel, Heading, Wrap, WrapItem, SimpleGrid, Text, Progress } from '@chakra-ui/react';

import { FlickingEvent, SelectEvent, ChangeEvent, NeedPanelEvent } from "@egjs/flicking";
import Flicking from "@egjs/react-flicking";
import { Parallax, Fade, AutoPlay } from "@egjs/flicking-plugins";

import { FullViewportContainer } from '../full-viewport-container/full-viewport-container.jsx'

import skills from '../../assets/data/skills.js';

import './competences.css';
import bgImage from '../../assets/images/skills-cover.webp';

function SkillCard({skill}) {
    if (!skill) {
        return null;
    }

    return <Box
        mt="10px"
        mb="10px"
        p="8px"
        borderRadius="8px"
        boxShadow="base"
        bg="azure"
        w="250px"
        h="80px"
        >
        <CircularProgress
            mr="8px"
            value={skill.value}>
            <CircularProgressLabel>{skill.value || '???'}%</CircularProgressLabel>
        </CircularProgress>
        <Text
            as="span"
            width="100%"
            margin="auto"
            >
            {skill.name}
        </Text>
        <Progress
            mt="0.25em"
            mb="0.25em"
            h="0.5em"
            hasStripe
            value={skill.value}
            />
    </Box>
}

const sortedSkills = skills.data.sort((a, b) => {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();
    if (aName < bName) {
        return -1; //nameA comes first
      }
      if (aName > bName) {
        return 1; // nameB comes first
      }
      return 0;  // names must be equal
});

const skillsElements = [];
for (let i = 0; i < Math.ceil(sortedSkills.length / 3); i++) {
    skillsElements[i] = <div key={'column-' + i}>
        <SkillCard key={'row-' + (i * 3)} skill={sortedSkills[(i * 3)]}/>
        <SkillCard key={'row-' + (i * 3) + 1} skill={sortedSkills[(i * 3) + 1]}/>
        <SkillCard key={'row-' + (i * 3) + 2} skill={sortedSkills[(i * 3) + 2]}/>
    </div>
}

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
                <Flicking 
                    duration={500}
                    circular={false}
                    autoResize={true}
                    adaptive={true}
                    gap={20}
                    bound={true}
                    moveType={{
                        type: "freeScroll"
                    }}
                    >
                    {skillsElements}
                </Flicking>
            </Box>
        </Container>
    </FullViewportContainer>
}