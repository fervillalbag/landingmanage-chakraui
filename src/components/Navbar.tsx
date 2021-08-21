import React from 'react'
import Link from 'next/link'
import { Grid, Flex, Image, Box, Text, Button } from '@chakra-ui/react'
import { FaTimes } from 'react-icons/fa'

const Navbar: React.FC = () => {
  return (
    <Box maxWidth="1200px" width="90%" margin="0 auto">
      <Grid
        position="fixed"
        top="0"
        maxWidth="1200px"
        width="90%"
        margin="0 auto"
        alignItems="center"
        height="100px"
        templateColumns={{
          base: '1fr max-content',
          lg: 'max-content 1fr 180px'
        }}
        zIndex="10"
      >
        <Box>
          <Link href="/">
            <Text as="a" _hover={{ cursor: 'pointer' }}>
              <Image src="/images/logo.svg" alt="" />
            </Text>
          </Link>
        </Box>
        <Flex
          justifyContent="center"
          width="100%"
          flexDirection={{ base: 'column', md: 'row' }}
          position={{ base: 'fixed', md: 'initial' }}
          left={{ base: '0', md: 'initial' }}
          height={{ base: '100vh', md: 'initial' }}
          backgroundColor={{ base: 'white', md: 'transparent' }}
          alignItems={{ base: 'center', md: 'initial' }}
        >
          <Button
            display={{ base: 'block', md: 'none' }}
            position="fixed"
            right="10px"
            top="20px"
            color="hsl(12, 88%, 59%)"
            backgroundColor="transparent"
            fontSize="32px"
          >
            <FaTimes />
          </Button>
          <Link href="/">
            <Text
              fontWeight="500"
              color="hsl(228, 39%, 23%)"
              as="a"
              _hover={{ cursor: 'pointer' }}
              mr={{ base: 0, md: 10 }}
              mb={{ base: 4, md: 0 }}
              fontSize={{ base: '24px', md: 'initial' }}
            >
              Pricing
            </Text>
          </Link>
          <Link href="/">
            <Text
              fontWeight="500"
              color="hsl(228, 39%, 23%)"
              as="a"
              _hover={{ cursor: 'pointer' }}
              mr={{ base: 0, md: 10 }}
              mb={{ base: 4, md: 0 }}
              fontSize={{ base: '24px', md: 'initial' }}
            >
              Product
            </Text>
          </Link>
          <Link href="/">
            <Text
              fontWeight="500"
              color="hsl(228, 39%, 23%)"
              as="a"
              _hover={{ cursor: 'pointer' }}
              mr={{ base: 0, md: 10 }}
              mb={{ base: 4, md: 0 }}
              fontSize={{ base: '24px', md: 'initial' }}
            >
              About Us
            </Text>
          </Link>
          <Link href="/">
            <Text
              fontWeight="500"
              color="hsl(228, 39%, 23%)"
              as="a"
              _hover={{ cursor: 'pointer' }}
              mr={{ base: 0, md: 10 }}
              mb={{ base: 4, md: 0 }}
              fontSize={{ base: '24px', md: 'initial' }}
            >
              Careers
            </Text>
          </Link>
          <Link href="/">
            <Text
              fontWeight="500"
              color="hsl(228, 39%, 23%)"
              as="a"
              _hover={{ cursor: 'pointer' }}
              mb={{ base: 4, md: 0 }}
              fontSize={{ base: '24px', md: 'initial' }}
            >
              Community
            </Text>
          </Link>
        </Flex>
        <Box display={{ base: 'none', lg: 'block' }}>
          <Link href="/">
            <Text
              as="a"
              display="block"
              background="hsl(12, 88%, 59%)"
              color="#fff"
              fontWeight="500"
              textAlign="center"
              py={3}
              rounded={30}
              _hover={{ cursor: 'pointer' }}
            >
              Get Started
            </Text>
          </Link>
        </Box>
      </Grid>
    </Box>
  )
}

export default Navbar
