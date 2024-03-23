import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";
import Carousel from "components/carousel/carousel";
import Subscribe from "components/subscribe/subscribe";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

import { FiShare2 } from 'react-icons/fi';

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Enswag | Discover, Explore, Create, Inspire"
        description="Explore. Create. Inspire. Unleash Your Swag."
      />
      <Box>
        <HeroSection />

        <CarouselSection />

        <HighlightsSection />

        {/* <FeaturesSection /> */}

        <TestimonialsSection />

        <SubscribeSection />

        {/* <PricingSection /> */}

        <FaqSection />

       
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                EnSwag: The Future of 
                <Br /> Entertainment is Here.
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                EnSwag UI is here for you to<Em> unleash your inner star</Em>  
                <Br /> and join a global community of creators on Enswag! <Br />{" "}
                This is your platform to discover endless entertainment. 
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
              <ButtonLink style={{ backgroundColor: '#efcc00', color: 'black' }} size="lg" href="/feedback">
  Download
</ButtonLink>

                <ButtonLink
                  size="lg"
                  href="https://enswag.com/videos"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  View demo video
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/EnSwagrebrand-removebg-preview.png"
                  layout="fixed"
                  width={600}
                  height={50}
                  alt="Screenshot of a ListPage in Enswag"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Effortless Creation:",
            icon: FiSmile,
            description: "Capture stunning short-form videos with Enswag intuitive camera tools. Edit and enhance your videos with a library of trendy filters, effects, and transitions.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Seamless Sharing:",
            icon: FiSliders,
            description:
              "Share your creations instantly with your Enswag followers or directly to other social platforms. Discover trending hashtags and challenges to join the fun and expand your reach.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Global Community",
            icon: FiGrid,
            description:
              "Follow creators from all corners of the world and discover diverse content. Interact with other users through comments, likes, and direct messages.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Endless Entertainment",
            icon: FiThumbsUp,
            description:
              "Explore a personalized feed curated based on your interests and watch videos that keep you engaged. Browse trending topics and challenges to see what is buzzing on Enswag.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("text copied");

  return (
    <Box marginTop={0}>
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Explore Your Passions (or Discover Something New)">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            
            Dive into a universe of endless creativity with 
            categories like comedy skits, dance challenges, beauty tutorials, and DIY hacks. <Em>The world is your stage on Enswag! </Em>.
             Ignite your passions, discover new hobbies, and be inspired by a global community of creators 
             – there&apos;s something for everyone on Enswag.
          </Text>

          <Flex
  rounded="full"
  borderWidth="1px"
  flexDirection="row"
  alignItems="center"
  py="1"
  ps="8"
  pe="2"
  bg="primary.900"
  _dark={{ bg: "gray.900" }}
  as="a" 
  href="https://www.enswag.com" 
>
  <Box>
    <Text color="yellow.400" display="inline">
      Download Enswag Now!
    </Text>{" "}
    <Text color="cyan.300" display="inline">
      Express yourself with ease.
    </Text>
  </Box>
  <IconButton
    icon={<FiShare2 />} // Use FiShare2 icon for sharing functionality
    aria-label="Share Enswag" // Update the aria-label for sharing context
    variant="ghost"
    ms="4"
    isRound
    color="white"
  />
</Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Become an Enswag Influencer and Shine Bright!">
        <Text color="muted" fontSize="lg">
          • <Em>Download the App & Sign Up:</Em> Get started by downloading the Enswag app and creating your account. 
          <br />
          • <Em>Fill Out Your Profile:</Em> Make your profile shine by adding information and showcasing your talents.  
          <br />
          • <Em>Get Verified:</Em> Once you&apos;ve completed your profile, our team will review it for verification. 
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Murari Sataya"
        description="Founder"
        avatar="/static/images/eelco.jpg"
        gradient={["pink.200", "purple.500"]}
      >
       &quot;At Enswag, we believe everyone has a story to tell and a talent to share.
        That&apos;s why we created a platform to connect creators with a global audience. 
        Download the app and join the movement!&quot; - Murari Sataya, Enswag Founder.
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Go From Zero to Hero: Features to Fuel Your Enswag Journey"
      >
        <Text color="muted" fontSize="lg">
          Unleash your creativity and express yourself with Enswag&apos;s extensive toolbox. 
          Dive into these features and start creating content that captures the world&apos;s attention!

        </Text>
        <Wrap mt="8">
          {[
            "Create Stunning",
            "Trending Effects",
            "Share Everywhere",
            "Explore Creators",
            "Engage Community",
            "Personalized Feed",
            "Go Viral",
            "Live Stream",
            "Duet Videos",
            "Stitch Videos",
            "Multi-Device",
            "Monetize Content",
            "Track Performance",
            "Safe Environment",
            "Branded Deals",
            "Join Challenges",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
    </Box>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> dashboard template.
        </Heading>
      }
      description={
        <>
          Enswag includes everything you need to enjoy.
          <Br />
          Unlock. Explore. Create. Inspire. Unleash Your Swag.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Components.",
          icon: FiBox,
          description:
            "All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.",
          variant: "inline",
        },
        {
          title: "Starterkits.",
          icon: FiLock,
          description:
            "Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.",
          variant: "inline",
        },
        {
          title: "Documentation.",
          icon: FiSearch,
          description:
            "Extensively documented, including storybooks, best practices, use-cases and examples.",
          variant: "inline",
        },
        {
          title: "Onboarding.",
          icon: FiUserPlus,
          description:
            "Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.",
          variant: "inline",
        },
        {
          title: "Feature flags.",
          icon: FiFlag,
          description:
            "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you&apos;re ready.",
          variant: "inline",
        },
        {
          title: "Upselling.",
          icon: FiTrendingUp,
          description:
            "Components and hooks for upgrade flows designed to make upgrading inside your app frictionless.",
          variant: "inline",
        },
        {
          title: "Themes.",
          icon: FiToggleLeft,
          description:
            "Includes multiple themes with darkmode support, always have the perfect starting point for your next project.",
          variant: "inline",
        },
        {
          title: "Generators.",
          icon: FiTerminal,
          description:
            "Extend your design system while maintaininig code quality and consistency with built-in generators.",
          variant: "inline",
        },
        {
          title: "Monorepo.",
          icon: FiCode,
          description: (
            <>
              All code is available as packages in a high-performance{" "}
              <Link href="https://turborepo.com">Turborepo</Link>, you have full
              control to modify and adjust it to your workflow.
            </>
          ),
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};


const CarouselSection = () => {
  return (
    <Carousel
      title="Glimpse into Enswag: Spark Your Creativity!"
      description={
        <>
         Explore. Create. Inspire. Peek into Enswag&apos;s dynamic slideshow for a burst of creativity. Join us now and let your imagination run wild!
        </>
      }
    />
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

const SubscribeSection = () => {
  return <Subscribe />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Support us by giving feedback! 🚀 ",
        description:
          '<img src="https://img.shields.io/badge/%20give%20us%20feedback%20-yellow" />',
        href: "/feedback",
        action: false,
      },
    },
  };
}
