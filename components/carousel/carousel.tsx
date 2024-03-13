import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const MotionBox = motion(Box); // Wrap Box component with motion

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = ({ title, description }) => {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '5%', md: '2%' }); // Adjusted side spacing

  const cards = [
    {
      title: 'Enwag Features',
      text: 'Discover the power of Enwag with our innovative features and tools designed to elevate your social media experience.',
      image: "/static/images/sliderFive.png",
    },
    {
      title: 'Personalized Profiles',
      text: 'Express yourself with Enwag’s personalized profiles and content creation tools tailored to reflect your unique style and personality.',
      image: "/static/images/sliderThree.png",
    },
    {
      title: 'Creative Collaborations',
      text: 'Join a vibrant community on Enwag and engage in creative collaborations to inspire and be inspired by others.',
      image: "/static/images/sliderTwo.png",
    },
    {
      title: 'Effortless Engagement',
      text: 'Experience seamless interaction and effortless engagement on Enwag, connecting with others and sharing your swag with ease.',
      image: "/static/images/sliderFour-removebg-preview.png",
    },
    {
      title: 'Next-Level Presence',
      text: 'Take your social media presence to the next level with Enwag, the ultimate platform for showcasing your creativity and connecting with like-minded individuals.',
      image: "/static/images/sliderOne-removebg-preview.png",
    },
  ];
  

  return (
    <Box position={'relative'} height={'600px'} width={'90%'} overflow={'hidden'} marginX="auto"  id="about"> 
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Heading
        as="h2"
        textAlign="center"
        marginBottom="4"
        fontSize="3xl"
        fontWeight="semibold"
      >
        {title}
      </Heading>
      <Text
        textAlign="center"
        fontSize="lg"
        color="gray.600"
        marginBottom="8"
      >
        {description}
      </Text>
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <MotionBox
            key={index}
            height="400px" // Adjusted height
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
            animate={{ scale: [0.5, 1], opacity: [0, 1] }} // Animation properties
            transition={{ duration: 0.5 }}
          >
            <Container size="container.lg" height="400px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}> {/* Adjusted font sizes */}
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'sm', lg: 'md' }} color="GrayText"> {/* Adjusted font sizes */}
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </MotionBox>
        ))}
      </Slider>
    </Box>
  );
}

export default Carousel;
