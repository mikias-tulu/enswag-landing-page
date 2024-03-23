'use client'

import { useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

const Form1 = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Give Us Feedback!
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We&apos;ll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
  <FormLabel
    htmlFor="password"
    fontSize="sm"
    fontWeight="md"
    color="gray.700"
    _dark={{
      color: 'gray.50',
    }}
    mt="2%">
    Enswag Username 
  </FormLabel>
  <InputGroup size="md">
    <Input
      pr="4.5rem"
      type={show ? 'text' : 'password'}
      placeholder="Enter username"
    />
    <InputRightElement width="4.5rem">
      <Button h="1.75rem" size="sm" onClick={handleClick}>
        {show ? 'Hide' : 'Show'}
      </Button>
    </InputRightElement>
  </InputGroup>
</FormControl>

    </>
  )
}

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Feedback Form
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="feature"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Select Your Favorite Feature
        </FormLabel>
        <Select
          id="feature"
          name="feature"
          autoComplete="feature"
          placeholder="Select feature"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>Personalized Profiles</option>
          <option>Swag-Centric Design</option>
          <option>Creative Collaboration</option>
          <option>Effortless Engagement</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="issue"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Select An Issue
        </FormLabel>
        <Select
          id="issue"
          name="issue"
          autoComplete="issue"
          placeholder="Select issue"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>Bugs or Errors</option>
          <option>Usability Issues</option>
          <option>Performance Problems</option>
          <option>Feature Requests</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="suggestion"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Any Suggestions?
        </FormLabel>
        <Textarea
          id="suggestion"
          name="suggestion"
          autoComplete="suggestion"
          placeholder="Share your suggestion"
          rows={3}
          shadow="sm"
          focusBorderColor="brand.400"
          fontSize={{
            sm: 'sm',
          }}
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="name"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Your Country
        </FormLabel>
        <Input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Enter your country"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="email"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          why do you use Enswag for?
        </FormLabel>
        <Input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="I use enswag for.."
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  )
}


const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        How Can We Reach Out to You?
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            htmlFor="email"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Email Address
          </FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="you@example.com"
            focusBorderColor="brand.400"
            rounded="md"
            size="sm"
          />
        </FormControl>

        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            htmlFor="phone"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Phone Number
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              children="+"
              bg="gray.200"
              color="gray.500"
              rounded="md"
            />
            <Input
              type="tel"
              id="phone"
              placeholder="123-456-7890"
              focusBorderColor="brand.400"
              rounded="md"
              size="sm"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="social-media" mt={1}>
          <FormLabel
            htmlFor="social-media"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Social Media Handles
          </FormLabel>
          <Box display="flex" flexWrap="wrap">
            <InputGroup size="sm" mr={2} mb={2}>
              <InputLeftAddon
                bg="gray.200"
                color="gray.500"
                rounded="md"
                children="http://"
              />
              <Input
                type="text"
                placeholder="www.example.com"
                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
            <InputGroup size="sm" mr={2} mb={2}>
              <InputLeftAddon
                bg="gray.200"
                color="gray.500"
                rounded="md"
                children="@"
              />
              <Input
                type="text"
                placeholder="Twitter handle"
                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
            <InputGroup size="sm" mr={2} mb={2}>
              <InputLeftAddon
                bg="gray.200"
                color="gray.500"
                rounded="md"
                children="http://"
              />
              <Input
                type="text"
                placeholder="Facebook URL"
                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
            <InputGroup size="sm" mr={2} mb={2}>
              <InputLeftAddon
                bg="gray.200"
                color="gray.500"
                rounded="md"
                children="@"
              />
              <Input
                type="text"
                placeholder="Instagram handle"
                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
            {/* Add more social media fields as needed */}
          </Box>
          <FormHelperText>
            Provide your social media handles for better communication.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
}

export default function ContactUs() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 3) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 33.33)
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We have created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}
