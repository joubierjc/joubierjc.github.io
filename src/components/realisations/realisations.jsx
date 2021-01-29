import * as React from 'react';
import { Box, Button, Center, Container, Heading, Image, Text, IconButton, SimpleGrid, Square, useCallbackRef } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

import { FlickingEvent, SelectEvent, ChangeEvent, NeedPanelEvent } from "@egjs/flicking";
import Flicking from "@egjs/react-flicking";
import { Parallax, Fade, AutoPlay } from "@egjs/flicking-plugins";

import { FullViewportContainer } from '../full-viewport-container/full-viewport-container.jsx'

import './realisations.css';
import pepeSaber from '../../assets/images/pepe-saber.gif';

export function Realisations() {

    const itemsLength = [1,2,3,4,5,6,7,8,9,10];

    const items = itemsLength.map((item) => {
        return (
            <Center key={item} width="200px" height="200px" bg="tomato">
                {item}
            </Center>
        );
    });

    const [slideInfo, setSlideInfo] = React.useState(itemsLength[0] || '');

    const carousel = React.useRef(null);
    
    const handleSelect = React.useCallback((e) => {
        e.currentTarget.moveTo(e.index);
    });
    const handleChange = React.useCallback((e) => {
        setSlideInfo(itemsLength[e.index]);
    });

    return <FullViewportContainer id="realisations">
        <Container 
            maxW="95%"
            className="realisations-container"
            >
            <Center>
                <Heading>Réalisations</Heading>
            </Center>
            <Box mt="1em" maxW="100%">
                <Center mb="1em">
                    <Heading as="h3" fontSize="lg">{slideInfo}</Heading>
                </Center>
                <Flicking ref={carousel}
                    // tag = "div"
                    // viewportTag = "div"
                    // cameraTag = "div"
                    // onNeedPanel = {(e) => {}}
                    // onMoveStart = {(e) => {}}
                    // onMove = {(e) => {}}
                    // onMoveEnd = {(e) => {}}
                    // onHoldStart = {(e) => {}}
                    // onHoldEnd = {(e) => {}}
                    // onRestore = {(e) => {}}
                    onSelect = {handleSelect}
                    onChange = {handleChange}
                    // classPrefix = "eg-flick"
                    // deceleration = {0.0075}
                    // horizontal = {true}
                    circular = {true}
                    plugins={[
                        new AutoPlay({
                            stopOnHover: true,
                            duration: 5000,
                            direction: "NEXT"
                        })
                    ]}
                    // infinite = {false}
                    // infiniteThreshold = {0}
                    // lastIndex = {Infinity}
                    // threshold = {40}
                    // duration = {100}
                    // panelEffect = {x => 1 - Math.pow(1 - x, 3)}
                    // defaultIndex = {0}
                    // inputType = {["touch", "mouse"]}
                    // thresholdAngle = {45}
                    // bounce = {10}
                    autoResize = {true}
                    adaptive = {true}
                    // zIndex = {2000}
                    // bound = {false}
                    // overflow = {false}
                    // hanger = {"50%"}
                    // anchor = {"50%"}
                    gap = {20}
                    // moveType = {{type: "snap", count: 1}}
                    // collectStatistics = {true}
                    >
                    {items}
                </Flicking>
            </Box>
        </Container>
    </FullViewportContainer>
}