import * as React from 'react';
import { Box, Button, Center, Container, Heading, Image, Text, IconButton, SimpleGrid, Square, useDisclosure } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"

import { FlickingEvent, SelectEvent, ChangeEvent, NeedPanelEvent } from "@egjs/flicking";
import Flicking from "@egjs/react-flicking";
import { Parallax, Fade, AutoPlay } from "@egjs/flicking-plugins";

import { FullViewportContainer } from '../full-viewport-container/full-viewport-container.jsx'

import './realisations.css';
import reals from '../../assets/js/reals.js';

const realsData = reals.data.length > 1 ? reals.data : [...reals.data, ...reals.data];

export function Realisations() {

    const handleSelect = React.useCallback((e) => {
        e.currentTarget.moveTo(e.index);
    });
    const handleChange = React.useCallback((e) => {
        setSlideInfo(realsData[e.index]);
    });
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [slideInfo, setSlideInfo] = React.useState(realsData[0]);

    const carousel = React.useRef(null);

    const items = React.useMemo(() => {
        return realsData.map((item, index) => {
            return <Center key={index} width={['200px', '300px']} height={['200px', '300px']} bg="tomato">
                    <Button onClick={onOpen}>{index}</Button>
                </Center>
        });
    }, [realsData]);
    
    return <>
        <FullViewportContainer id="realisations">
            <Container 
                maxW="95%"
                className="realisations-container"
                >
                <Center>
                    <Heading>Réalisations &amp; Expériences</Heading>
                </Center>
                <Box mt="1em" maxW="100%">
                    <Center mb="1em">
                        <Heading as="h3" fontSize="lg">{slideInfo.title}</Heading>
                    </Center>
                    <Flicking ref={carousel}
                        onSelect = {handleSelect}
                        onChange = {handleChange}
                        circular = {true}
                        plugins={[
                            new AutoPlay({
                                stopOnHover: true,
                                duration: 5000,
                                direction: "NEXT"
                            })
                        ]}
                        autoResize = {true}
                        adaptive = {true}
                        gap = {20}
                        >
                        {items}
                    </Flicking>
                </Box>
            </Container>
        </FullViewportContainer>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{slideInfo.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>{slideInfo.desc}</Text>
                    <Text>{slideInfo.tech.join(', ')}</Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}