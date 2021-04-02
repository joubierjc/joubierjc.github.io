import * as React from 'react';
import { Box, Button, Center, Container, Heading, Image, Text, IconButton, Link } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import jump from 'jump.js';

import { FullViewportContainer } from '../full-viewport-container/full-viewport-container.jsx'

import './intro.css';
import photo from '../../assets/images/photo-320.png';
import facts from '../../assets/data/facts.js';
import bgImage from '../../assets/images/abstract-city.jpg';

function shuffle(array) {
    let arr = array;
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

function useCarousel(array, startingIndex = 0) {
    let index = startingIndex;
    const [state, setState] = React.useState({ key: index, value: array[index] });
    const prev = () => {
        index = (index <= 0) && array.length - 1 || index - 1;
        setState({
            key: index,
            value: array[index]
        });
    }
    const next = () => {
        index = (index + 1) % array.length;
        setState({
            key: index,
            value: array[index]
        });
    }
    
    return [state, prev, next];
}

function RandomFacts() {

    const FACTS = shuffle([...facts.data]);

    const [data, prev, next] = useCarousel(FACTS, 0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 7 * 1000);

        return () => clearInterval(timer);
    }, []);

    return <Box
        mt="0.5em"
        mb="0.5em"
        pt="0.5em"
        className="random-facts"
        boxShadow="lg"
        width="100%" 
        maxW="5xl"
        position="relative"
        >
        <div className="box-header">Random facts</div>
        <Center p="5" position="relative" minH="100px" overflow="hidden" fontSize="md">
            <div key={data.key} className="fact">
                {data.value}
            </div>
        </Center>
    </Box>
}

export function Intro() {

    // const goToRealisations = React.useCallback(() => jump('#realisations', { duration: 1000 }));

    return <FullViewportContainer id="intro">
        <div
            className="bg-image"
            style={{
                backgroundImage: `url(${bgImage})`
            }}
            ></div>
        <Container
            className="intro-presentation"
            boxShadow="dark-lg"
            position="relative"
            top="50%"
            transform="translateY(-50%)"
            maxW="6xl"
            centerContent
            >
            
            <Box maxW="xs" position="relative">
                <Image 
                    boxShadow="lg"
                    src={photo} 
                    fallbackSrc="https://via.placeholder.com/320"
                    borderRadius="full"
                />
            </Box>

            <Box maxW="xl" mt="1.5em" mb="2.5em" position="relative">
                <Heading as="h1" size="2xl">Jean-Christophe Joubier</Heading>
            </Box>

            <RandomFacts/>

            {/* <IconButton
                mt=".5em"
                borderRadius="full"
                overflow="hidden"
                size="6xl"
                fontSize="6xl"
                icon={<ArrowDownIcon/>}
                onClick={goToRealisations}
            /> */}

        </Container>
    </FullViewportContainer>
}
