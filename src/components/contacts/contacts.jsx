import * as React from 'react';
import { Box, Center, Container, CircularProgress, CircularProgressLabel, Flex, Heading, Image, Link, Wrap, WrapItem, SimpleGrid } from '@chakra-ui/react';
import { ArrowDownIcon, ExternalLinkIcon, ViewIcon } from '@chakra-ui/icons';

import { FullViewportContainer } from '../full-viewport-container/full-viewport-container.jsx'

import contactsData from '../../assets/data/contacts.js';
import bgImage from '../../assets/images/contacts-cover.webp';

const contactInfos = contactsData.data.sort((a, b) => {
    const aName = a.label.toUpperCase();
    const bName = b.label.toUpperCase();
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
            w="300px"
            >
            
            <Link
                display="flex"
                alignItems="center"
                justifyContent="center"
                href={e.link}
                isExternal>
                <Image
                    mr="8px"
                    h="50px"
                    src={e.logo}
                    fallbackSrc="https://via.placeholder.com/50"
                    />
                <span>{e.label} <ExternalLinkIcon mx="2px"/></span>
            </Link>
            
        </Box>
    </Center>
);

export function Contacts() {

    return <FullViewportContainer id="contacts">
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
                <Heading>Contacts &amp; Réseaux sociaux</Heading>
            </Center>
            <Center mt="1em">
                <Heading as="h3" fontSize="lg">Pour plus de détails sur mon parcours, et tout le reste...</Heading>
            </Center>
            <Box mt="1em" maxW="100%">
                <Center w="100%">
                    <SimpleGrid
                        className="grid-container"
                        minChildWidth="300px"
                        spacing="10px"
                        >
                        {contactInfos}
                    </SimpleGrid>
                </Center>
            </Box>
        </Container>
    </FullViewportContainer>
}