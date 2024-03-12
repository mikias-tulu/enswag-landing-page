import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'EnSwag',
    description: 'Discover. Create. Be Entertained.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'about',
        label: 'About',
      },
      {
        id: 'testimonials',
        label: 'Testimonial',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
     
      {
        label: 'Feedback',
        href: '/feedback',
        style: { backgroundColor: '#efcc00', color: 'black' },
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="#">Enswag LLC</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:hello@enswag.com',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/enswag.com',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/enswag',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Discover Your Swagger: Enswag, Instant Style Inspiration!',
    features: [
      {
        icon: FiCheck,
        title: 'Swag-Centric Design',
        description: 'Immerse yourself in stylish components tailored for a swag-focused social media experience.',
      },
      {
        icon: FiCheck,
        title: 'Personalized Profile',
        description: 'Customize your profile to reflect your unique style, ensuring your presence on Enswag truly represents you.',
      },
      {
        icon: FiCheck,
        title: 'Collaborative Creation',
        description: 'Join a vibrant community and collaborate effortlessly to create captivating content and inspire others.',
      },
      {
        icon: FiCheck,
        title: 'Seamless Engagement',
        description: 'Connect, interact, and share your swag effortlessly with intuitive tools designed for maximum social media productivity.',
      },
        
    ],
  },
}

export default siteConfig
