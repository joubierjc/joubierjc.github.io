import * as React from "react"
import { Box, Button, Container, Heading, Image, Text } from '@chakra-ui/react';

import { FullViewportContainer } from './components/full-viewport-container.jsx'
import Img from 'url:../assets/moi.png';

export function App() {
    return <> 
        <FullViewportContainer>
            <Container position="relative" top="50%" transform="translateY(-50%)" maxW="7xl" centerContent>
                <Box maxW="xs">
                    <Image 
                        src={Img} 
                        fallbackSrc="https://via.placeholder.com/1080"
                        borderRadius="full"
                    />
                </Box>
                <Heading mt="5" as="h1" size="2xl">Jean-Christophe Joubier</Heading>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt purus dui, vel dictum lectus pretium eu. Nam ex purus, lacinia a hendrerit a, rhoncus ut tellus. Aenean cursus maximus purus vitae molestie. Sed lacus mauris, tristique luctus ex a, dignissim iaculis massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur eget diam bibendum, lobortis elit in, molestie turpis. Praesent at semper justo. Duis tristique viverra magna, quis tristique elit pharetra quis. Ut blandit leo justo, eu tincidunt felis sagittis vitae. Pellentesque tempus vulputate mi, eu dictum felis. Donec non libero in diam facilisis consequat. Nulla nec finibus ante.
    . Etiam a urna nibh. Quisque vel dolor elit. Nullam mattis ex massa, in gravida felis rhoncus placerat. Maecenas hendrerit volutpat diam. Integer et massa felis. Donec at accumsan sapien. Praesent mollis viverra turpis, at ullamcorper purus. Praesent placerat egestas est, quis sodales tellus rhoncus nec. Morbi venenatis pellentesque massa, dapibus dapibus felis consectetur non.
                </Text>
                <Button position="relative" bottom="0">COUCOU</Button>
            </Container>
        </FullViewportContainer>

            <Container maxW="7xl" centerContent>
                <Box maxW="xs">
                    <Image 
                        src={Img} 
                        fallbackSrc="https://via.placeholder.com/1080"
                        borderRadius="full"
                    />
                </Box>
                <Heading mt="5" as="h1" size="2xl">Jean-Christophe Joubier</Heading>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt purus dui, vel dictum lectus pretium eu. Nam ex purus, lacinia a hendrerit a, rhoncus ut tellus. Aenean cursus maximus purus vitae molestie. Sed lacus mauris, tristique luctus ex a, dignissim iaculis massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur eget diam bibendum, lobortis elit in, molestie turpis. Praesent at semper justo. Duis tristique viverra magna, quis tristique elit pharetra quis. Ut blandit leo justo, eu tincidunt felis sagittis vitae. Pellentesque tempus vulputate mi, eu dictum felis. Donec non libero in diam facilisis consequat. Nulla nec finibus ante.
    . Etiam a urna nibh. Quisque vel dolor elit. Nullam mattis ex massa, in gravida felis rhoncus placerat. Maecenas hendrerit volutpat diam. Integer et massa felis. Donec at accumsan sapien. Praesent mollis viverra turpis, at ullamcorper purus. Praesent placerat egestas est, quis sodales tellus rhoncus nec. Morbi venenatis pellentesque massa, dapibus dapibus felis consectetur non.
                </Text>
            </Container>
    </>
}