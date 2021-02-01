import * as React from 'react';
import { Box, Button, Center, Container, Heading, Image, Link, Text, IconButton, SimpleGrid, Square, useDisclosure, Tag, HStack, VStack, Divider, useCallbackRef } from '@chakra-ui/react';
import { ArrowDownIcon, ExternalLinkIcon, ViewIcon } from '@chakra-ui/icons';

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
import reals from '../../assets/data/reals';

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
            return <Square
                className="carousel-item"
                key={index}
                size={['200px', '300px']}
                boxShadow="lg"
                >
                <div
                    className="carousel-item-cover"
                    style={{
                        backgroundImage: `url(${item.cover || 'https://picsum.photos/300'})`
                    }}
                    >
                </div>
                <div className="carousel-item-overlay">
                    <div className="carousel-item-overlay-content">
                        <ViewIcon
                            cursor="pointer"
                            fontSize="6xl"
                            color="white"
                            onClick={onOpen}
                            />
                    </div>
                </div>
            </Square>
        });
    }, [realsData]);

    return <>
        <FullViewportContainer id="realisations">
            <Container 
                maxW="95%"
                className="container"
                >
                <Center>
                    <Heading>Réalisations &amp; Expériences</Heading>
                </Center>
                <Box mt="1em" maxW="100%">
                    <Center mb="1em">
                        <Heading as="h3" fontSize="lg">{slideInfo.title}</Heading>
                    </Center>
                    <Flicking ref={carousel}
                        duration={500}
                        onSelect={handleSelect}
                        onChange={handleChange}
                        circular={false}
                        autoResize={true}
                        adaptive={true}
                        gap={20}
                        // overflow={true}
                        // style={{
                        //     padding: "2em"
                        // }}
                        >
                        {items}
                    </Flicking>
                </Box>
            </Container>
        </FullViewportContainer>

        <Modal 
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            scrollBehavior="inside"
            >
            <ModalOverlay/>
            <ModalContent
                maxW="6xl"
                >
                <ModalHeader>
                    <Heading isTruncated>{slideInfo.title}</Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {[
                        isOpen && slideInfo?.link && 
                        <Link href={slideInfo.link} isExternal>
                            Lien vers le projet <ExternalLinkIcon mx="2px"/>
                        </Link>,
                        isOpen && slideInfo?.tech && 
                            <HStack key="tech">
                                {slideInfo.tech.map((e, i) => <Tag key={`tech-${i}`}>{e}</Tag>)}
                            </HStack>,
                        isOpen && slideInfo?.desc &&
                            <Text key="desc">{slideInfo.desc}</Text>,
                        isOpen && slideInfo?.images &&
                            <VStack key="images">
                                {slideInfo.images.map((e, i) => <Image key={`images-${i}`} src={e}/>)}
                            </VStack>
                    ].reduce((acc, x, i) => {
                        if (acc) {
                            if (x) {
                                return [acc, <Divider key={`divider-${i}`} mt="0.5em" mb="0.5em"/>, x];
                            }
                            return acc;
                        }
                        if (x) {
                            return [x];
                        }
                        return null;
                    })}
                </ModalBody>

                <ModalFooter>
                    <Button onClick={onClose}>Fermer</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}