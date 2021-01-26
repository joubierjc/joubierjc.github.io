import * as React from 'react';
import { Box, Button, Center, Container, Heading, Image, Text, IconButton } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

import { FullViewportContainer } from '../full-viewport-container/full-viewport-container.jsx'

import './intro.css';
import photo from '../../../assets/photo.png';

export function Intro() {
    return <FullViewportContainer>
        <div className="bg-image"></div>
        <Container className="intro-presentation" position="relative" top="-50%" transform="translateY(-50%)" maxW="6xl" centerContent>
            <Box mt="10" maxW="xs" position="relative">
                <Image 
                    src={photo} 
                    fallbackSrc="https://via.placeholder.com/1080"
                    borderRadius="full"
                />
            </Box>
            <Box maxW="xl" position="relative">
                <Heading mt="5" as="h1" size="2xl">Jean-Christophe Joubier</Heading>
            </Box>
            <Box mt="10" className="intro-desc" maxW="6xl" position="relative">
                <Center p="5" position="relative" minH="100px">
                    J'adore les challenges, apprendre et créer de nouvelles choses dès que je le peux.
                    Je suis également Game Dev sur mon temps libre.
                    Enchanté ! 
                </Center>
            </Box>
            <IconButton m="10" colorScheme="gray" borderRadius="full" size="6xl" fontSize="6xl" icon={<ArrowDownIcon/>} />
        </Container>
    </FullViewportContainer>
}
