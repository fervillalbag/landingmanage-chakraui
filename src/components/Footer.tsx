import React from 'react'
import Link from 'next/link'
import { Box, Button, Flex, Grid, Image, Input, Text } from '@chakra-ui/react'

const Footer: React.FC = () => {
  return (
    <>
      {/* Footer */}
      <Box backgroundColor="hsl(233, 12%, 13%)" padding="72px 0">
        <Grid
          maxWidth="1200px"
          width="90%"
          margin="0 auto"
          gridRowGap={{ base: '32px', lg: '0' }}
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: '1fr 3fr 2fr'
          }}
          templateRows={{
            base: 'repeat(5, max-content)',
            md: 'repeat(3, max-content)',
            lg: '1fr max-content'
          }}
        >
          <Link href="/">
            <Box
              as="a"
              gridColumn="1/2"
              gridRow="1/2"
              margin={{ base: '0 auto', md: 'initial' }}
            >
              <Image src="/images/logowhite.svg" />
            </Box>
          </Link>

          <Flex justifyContent="space-evenly">
            <Flex direction="column">
              <Link href="/">
                <Text as="a" color="#fff" marginBottom="16px" cursor="pointer">
                  Home
                </Text>
              </Link>
              <Link href="/">
                <Text as="a" color="#fff" marginBottom="16px" cursor="pointer">
                  Pricing
                </Text>
              </Link>
              <Link href="/">
                <Text as="a" color="#fff" marginBottom="16px" cursor="pointer">
                  Products
                </Text>
              </Link>
              <Link href="/">
                <Text as="a" color="#fff" cursor="pointer">
                  About Us
                </Text>
              </Link>
            </Flex>
            <Flex direction="column">
              <Link href="/">
                <Text as="a" color="#fff" marginBottom="16px" cursor="pointer">
                  Careers
                </Text>
              </Link>
              <Link href="/">
                <Text as="a" color="#fff" marginBottom="16px" cursor="pointer">
                  Community
                </Text>
              </Link>
              <Link href="/">
                <Text as="a" color="#fff" cursor="pointer">
                  Privacy Policy
                </Text>
              </Link>
            </Flex>
          </Flex>

          <Box gridRow={{ base: '3/4', lg: 'initial' }}>
            <Grid
              templateColumns={{ base: '1fr 80px', lg: '1fr 100px' }}
              gridColumnGap="16px"
            >
              <Input
                color="hsl(228, 39%, 23%)"
                border="none"
                backgroundColor="#fff"
                height="50px"
                borderRadius="50px"
                padding="0 20px"
                _focus={{ outline: 'none' }}
                placeholder="Updates in your inbox.."
              />
              <Button
                display="block"
                width="100%"
                background="hsl(12, 88%, 59%)"
                color="#fff"
                fontWeight="500"
                height="50px"
                textAlign="center"
                rounded={30}
                _hover={{ cursor: 'pointer' }}
              >
                <Text>Go</Text>
              </Button>
            </Grid>
          </Box>

          <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
            <Link href="/">
              <Box as="a" marginRight="16px">
                <Image src="/icon/icon-facebook.svg" />
              </Box>
            </Link>
            <Link href="/">
              <Box as="a" marginRight="16px">
                <Image src="/icon/icon-youtube.svg" />
              </Box>
            </Link>
            <Link href="/">
              <Box as="a" marginRight="16px">
                <Image src="/icon/icon-pinterest.svg" />
              </Box>
            </Link>
            <Link href="/">
              <Box as="a" marginRight="16px">
                <Image src="/icon/icon-twitter.svg" />
              </Box>
            </Link>
            <Link href="/">
              <Box as="a">
                <Image src="/icon/icon-instagram.svg" />
              </Box>
            </Link>
          </Flex>

          <Flex
            gridColumn={{ base: 'initial', lg: '3/4' }}
            justifyContent={{ base: 'center', lg: 'flex-end' }}
            alignItems="center"
          >
            <Text color="hsl(227, 12%, 61%)" textAlign="right">
              Copyright 2020. All Rights Reserved
            </Text>
          </Flex>
        </Grid>
      </Box>
    </>
  )
}

export default Footer
