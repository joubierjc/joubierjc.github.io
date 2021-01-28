import * as React from 'react';
import { Box, Button, Center, Container, Heading, Image, Text, IconButton, SimpleGrid, Square } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

import { FullViewportContainer } from '../full-viewport-container/full-viewport-container.jsx'

import pepeSaber from '../../assets/images/pepe-saber.gif';

export function Realisations() {

    return <FullViewportContainer id="realisations">
        <Container height="100%" minH="50em" centerContent>
            <Heading as="h1">Réalisations</Heading>
            <SimpleGrid columns={3} spacing={10}>
                <Box bg="tomato" w="100%" maxW="1000px" >AZER</Box>
                <Box bg="tomato" w="100%" maxW="1000px" >AZER</Box>
                <Box bg="tomato" w="100%" maxW="1000px" >AZER</Box>
                <Box bg="tomato" w="100%" maxW="1000px" >AZER</Box>
                <Box bg="tomato" w="100%" maxW="1000px" >AZER</Box>
                <Box bg="tomato" w="100%" maxW="1000px" >AZER</Box>
                <Box bg="tomato" w="100%" maxW="1000px" >AZER</Box>
            </SimpleGrid>
        </Container>
    </FullViewportContainer>
}