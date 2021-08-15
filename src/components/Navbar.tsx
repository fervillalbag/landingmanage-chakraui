import React from 'react'
import Link from 'next/link'
import { Flex, Image, Box, Text } from '@chakra-ui/react'

const Navbar: React.FC = () => {
  return (
    <Flex
      height="100px"
      alignItems="center"
      justifyContent="space-between"
      maxWidth="1200px"
      width="90%"
      margin="0 auto"
    >
      <Box>
        <Link href="/">
          <Text as="a" cursor="pointer">
            <Image src="/images/logo.svg" alt="" />
          </Text>
        </Link>
      </Box>
      <Flex justifyContent="center" width="100%">
        <Link href="/">
          <Text
            fontWeight="500"
            color="hsl(228, 39%, 23%)"
            as="a"
            cursor="pointer"
            mr={10}
          >
            Pricing
          </Text>
        </Link>
        <Link href="/">
          <Text
            fontWeight="500"
            color="hsl(228, 39%, 23%)"
            as="a"
            cursor="pointer"
            mr={10}
          >
            Product
          </Text>
        </Link>
        <Link href="/">
          <Text
            fontWeight="500"
            color="hsl(228, 39%, 23%)"
            as="a"
            cursor="pointer"
            mr={10}
          >
            About Us
          </Text>
        </Link>
        <Link href="/">
          <Text
            fontWeight="500"
            color="hsl(228, 39%, 23%)"
            as="a"
            cursor="pointer"
            mr={10}
          >
            Careers
          </Text>
        </Link>
        <Link href="/">
          <Text
            fontWeight="500"
            color="hsl(228, 39%, 23%)"
            as="a"
            cursor="pointer"
          >
            Community
          </Text>
        </Link>
      </Flex>
      <Box width="200px">
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
          >
            Get Started
          </Text>
        </Link>
      </Box>
    </Flex>
  )
}

export default Navbar
