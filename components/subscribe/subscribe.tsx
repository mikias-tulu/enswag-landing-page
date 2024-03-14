'use client'

import { FormEvent, ChangeEvent, useState } from 'react'
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
  } from '@chakra-ui/react'

  interface StatsCardProps {
    title: string
    stat: string
  }

  function StatsCard(props: StatsCardProps) {
    const { title, stat } = props
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    )
  }

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'initial' | 'submitting' | 'success'>('initial')
  const [error, setError] = useState(false)

  return (
    
   <Flex
  minH={'50vh'}
  align={'center'}
  justify={'center'}
  bg={useColorModeValue('gray.50', 'gray.800')}
>
  {/* Box containing the company information */}
  <Box maxW="7xl" mx={'auto'} pt={0} px={{ base: 2, sm: 12, md: 17 }}>
    <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
    Next Year Targets: Enswag's Journey to Achieving Milestones
    </chakra.h1>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
      <StatsCard title={'We will connect'} stat={'100,000 people'} />
      <StatsCard title={'In'} stat={'30 different countries'} />
      <StatsCard title={'Who speak'} stat={'100 different languages'} />
    </SimpleGrid>
  </Box>

  
</Flex>


  )
}
