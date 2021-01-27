import * as React from 'react';
import { Box, Button, Center, Container, Heading, Image, Text, IconButton } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

import { FullViewportContainer } from '../full-viewport-container/full-viewport-container.jsx'

import pepeSaber from '../../../assets/images/pepe-saber.gif';

export function WorkInProgress() {

    return <FullViewportContainer>
        <Center bg="black" height="100%" minH="50em">
            <Box>
                <Heading as="h1" color="white">WORK IN PROGRESS</Heading>
                <Center minH="100%">
                    <Image src={pepeSaber}/>
                </Center>
            </Box>
        </Center>
    </FullViewportContainer>
}