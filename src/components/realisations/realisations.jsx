import * as React from 'react';
import { Box, Button, Center, Container, Heading, Image, Text, IconButton, SimpleGrid, Square } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { FullViewportContainer } from '../full-viewport-container/full-viewport-container.jsx'

import pepeSaber from '../../assets/images/pepe-saber.gif';

export function Realisations() {

    const itemsLength = Array.from({ length: 10 });

    const items = itemsLength.map((item, index) => {
        return (<Center>
            <Center minW="200px" minH="200px" bg="tomato">
                {index}
            </Center>
        </Center>);
    });

    const responsive = {
        0: { items: 1 },
        475: { items: 2 },
        700: { items: 3 },
        975: { items: 4 },
        1200: { items: 5 },
        1425: { items: 6 },
    };

    const style1 = {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        borderTop: "solid",
        borderBottom: "solid",
        maxWidth: "95%"
    };

    return <FullViewportContainer id="realisations">
        <Container pt="2.5em" pb="2.5em" style={style1}>
            <Center>
                <Heading>Réalisations</Heading>
            </Center>
            <Center>
                <Box maxW="100%">
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        // renderDotsItem={() => null}
                        // renderPrevButton={() => null}
                        // renderNextButton={() => null}
                    />
                </Box>            
            </Center>
        </Container>
    </FullViewportContainer>
}