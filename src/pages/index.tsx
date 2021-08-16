import React from 'react'
import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

import Layout from '../layout'
import { Illustration } from '../assets/Illustration'

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Header */}
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

      {/* Difference */}
      <Grid
        templateColumns="repeat(2, 1fr)"
        maxWidth="1200px"
        width="90%"
        margin="0 auto"
        padding="64px 0"
      >
        <Box>
          <Heading fontSize="40px" color="hsl(228, 39%, 23%)">
            What’s different about Manage?
          </Heading>
          <Text
            color="hsl(227, 12%, 61%)"
            fontWeight="400"
            fontSize="18px"
            marginTop="32px"
            maxWidth="70%"
          >
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </Text>
        </Box>
        <Box>
          <Grid
            as="article"
            templateColumns="64px 1fr"
            gridColumnGap="24px"
            gridRowGap="12px"
            alignItems="center"
            marginBottom="32px"
          >
            <Box
              background="hsl(12, 88%, 59%)"
              color="#fff"
              py={2}
              rounded={20}
              fontWeight="600"
              textAlign="center"
            >
              01
            </Box>
            <Box>
              <Heading fontSize="20px" color="hsl(228, 39%, 23%)">
                Track company-wide progress
              </Heading>
            </Box>
            <Box gridColumn="2/3">
              <Text color="hsl(227, 12%, 61%)" fontWeight="400" fontSize="18px">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </Text>
            </Box>
          </Grid>
          <Grid
            as="article"
            templateColumns="64px 1fr"
            gridColumnGap="24px"
            gridRowGap="12px"
            alignItems="center"
            marginBottom="32px"
          >
            <Box
              background="hsl(12, 88%, 59%)"
              color="#fff"
              py={2}
              rounded={20}
              fontWeight="600"
              textAlign="center"
            >
              02
            </Box>
            <Box>
              <Heading fontSize="20px" color="hsl(228, 39%, 23%)">
                Advanced built-in reports
              </Heading>
            </Box>
            <Box gridColumn="2/3">
              <Text color="hsl(227, 12%, 61%)" fontWeight="400" fontSize="18px">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </Text>
            </Box>
          </Grid>
          <Grid
            as="article"
            templateColumns="64px 1fr"
            gridColumnGap="24px"
            gridRowGap="12px"
            alignItems="center"
            marginBottom="32px"
          >
            <Box
              background="hsl(12, 88%, 59%)"
              color="#fff"
              py={2}
              rounded={20}
              fontWeight="600"
              textAlign="center"
            >
              03
            </Box>
            <Box>
              <Heading fontSize="20px" color="hsl(228, 39%, 23%)">
                Everything you need in one place
              </Heading>
            </Box>
            <Box gridColumn="2/3">
              <Text color="hsl(227, 12%, 61%)" fontWeight="400" fontSize="18px">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Layout>
  )
}

export default Home
