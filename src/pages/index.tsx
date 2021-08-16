import React from 'react'
import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

import Layout from '../layout'
import { Illustration } from '../assets/Illustration'

const Home: React.FC = () => {
  return (
    <Layout>
      <Grid
        templateColumns="repeat(2, 1fr)"
        maxWidth="1200px"
        width="90%"
        margin="0 auto"
        marginTop="56px"
        columnGap="72px"
        alignItems="center"
      >
        <Box>
          <Heading fontSize="56px" color="hsl(228, 39%, 23%)">
            Bring everyone together to build better products.
          </Heading>
          <Text
            color="hsl(227, 12%, 61%)"
            fontWeight="400"
            fontSize="18px"
            marginTop="32px"
            maxWidth="70%"
          >
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </Text>
          <Box width="160px" marginTop="32px">
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
                cursor="pointer"
              >
                Get Started
              </Text>
            </Link>
          </Box>
        </Box>
        <Box>
          <Illustration />
        </Box>
      </Grid>
    </Layout>
  )
}

export default Home
