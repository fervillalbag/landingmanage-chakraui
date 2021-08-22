import React from 'react'
import { Box, Grid, Heading, Text, Image, Flex } from '@chakra-ui/react'
import Link from 'next/link'

import HeaderIllustration from '../assets/illustration-intro.svg'
import Layout from '../layout'

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Header */}
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
        gridRowGap={{ base: '16px', lg: '0' }}
        maxWidth="1200px"
        width="90%"
        margin="0 auto"
        marginTop="56px"
        columnGap="72px"
        alignItems="center"
        position="relative"
        _before={{
          content: `''`,
          display: 'block',
          width: '30rem',
          height: '60rem',
          position: 'absolute',
          right: -100,
          bottom: 0,
          backgroundColor: 'hsl(13, 100%, 96%)',
          borderRadius: '30rem',
          zIndex: -1,
          transform: 'rotate(40deg)'
        }}
      >
        <Box>
          <Heading
            fontSize={{ base: '40px', md: '56px' }}
            color="hsl(228, 39%, 23%)"
            textAlign={{ base: 'center', lg: 'left' }}
          >
            Bring everyone together to build better products.
          </Heading>
          <Text
            color="hsl(227, 12%, 61%)"
            fontWeight="400"
            fontSize="18px"
            marginTop="32px"
            maxWidth={{ base: '100%', lg: '70%' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </Text>
          <Flex
            marginTop="32px"
            justifyContent={{ base: 'center', lg: 'flex-start' }}
          >
            <Link href="/">
              <Text
                as="a"
                display="block"
                background="hsl(12, 88%, 59%)"
                color="#fff"
                fontWeight="500"
                textAlign="center"
                px={8}
                py={3}
                rounded={30}
                _hover={{ cursor: 'pointer' }}
              >
                Get Started
              </Text>
            </Link>
          </Flex>
        </Box>
        <Box order={{ base: -1, lg: 'initial' }}>
          <Box>
            <Image src={HeaderIllustration} width="100%" />
          </Box>
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

      {/* Reviews */}
      <Box
        position="relative"
        _before={{
          content: '""',
          display: 'block',
          width: '30rem',
          height: '60rem',
          backgroundColor: 'hsl(12, 88%, 95%)',
          position: 'absolute',
          borderRadius: '30rem',
          transform: 'rotate(40deg)',
          left: -300,
          bottom: -100
        }}
      >
        <Box padding="64px 0" width="90%" margin="0 auto" maxWidth="1200px">
          <Heading
            textAlign="center"
            fontSize="40px"
            color="hsl(228, 39%, 23%)"
          >
            What they’ve said
          </Heading>

          <Grid
            templateColumns="repeat(3, 1fr)"
            marginTop="128px"
            gridColumnGap="32px"
          >
            <Box
              as="article"
              backgroundColor="hsl(0, 0%, 98%)"
              px="20px"
              pb="32px"
              pt="80px"
              position="relative"
              rounded="4px"
            >
              <Grid
                justifyItems="center"
                position="absolute"
                top="-80px"
                left="0"
                right="0"
              >
                <Image src="/images/avatar-anisha.png" alt="" />
              </Grid>
              <Box>
                <Heading
                  textAlign="center"
                  fontSize="16px"
                  color="hsl(228, 39%, 23%)"
                  marginBottom="16px"
                >
                  Anisha Li
                </Heading>
                <Text
                  color="hsl(227, 12%, 61%)"
                  fontWeight="400"
                  fontSize="18px"
                  textAlign="center"
                >
                  “Manage has supercharged our team’s workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated.”
                </Text>
              </Box>
            </Box>

            <Box
              as="article"
              backgroundColor="hsl(0, 0%, 98%)"
              px="20px"
              pb="32px"
              pt="80px"
              position="relative"
              rounded="4px"
            >
              <Grid
                justifyItems="center"
                position="absolute"
                top="-80px"
                left="0"
                right="0"
              >
                <Image src="/images/avatar-ali.png" alt="" />
              </Grid>
              <Box>
                <Heading
                  textAlign="center"
                  fontSize="16px"
                  color="hsl(228, 39%, 23%)"
                  marginBottom="16px"
                >
                  Ali Bravo
                </Heading>
                <Text
                  color="hsl(227, 12%, 61%)"
                  fontWeight="400"
                  fontSize="18px"
                  textAlign="center"
                >
                  “We have been able to cancel so many other subscriptions since
                  using Manage. There is no more cross-channel confusion and
                  everyone is much more focused.”
                </Text>
              </Box>
            </Box>

            <Box
              as="article"
              backgroundColor="hsl(0, 0%, 98%)"
              px="20px"
              pb="32px"
              pt="80px"
              position="relative"
              rounded="4px"
            >
              <Grid
                justifyItems="center"
                position="absolute"
                top="-80px"
                left="0"
                right="0"
              >
                <Image src="/images/avatar-richard.png" alt="" />
              </Grid>
              <Box>
                <Heading
                  textAlign="center"
                  fontSize="16px"
                  color="hsl(228, 39%, 23%)"
                  marginBottom="16px"
                >
                  Richard Watts
                </Heading>
                <Text
                  color="hsl(227, 12%, 61%)"
                  fontWeight="400"
                  fontSize="18px"
                  textAlign="center"
                >
                  “Manage allows us to provide structure and process. It keeps
                  us organized and focused. I can’t stop recommending them to
                  everyone I talk to!”
                </Text>
              </Box>
            </Box>
          </Grid>
          <Flex justifyContent="center" marginTop="48px">
            <Link href="/">
              <Text
                as="a"
                display="block"
                background="hsl(12, 88%, 59%)"
                color="#fff"
                fontWeight="500"
                textAlign="center"
                px={8}
                py={3}
                rounded={30}
                _hover={{ cursor: 'pointer' }}
              >
                Get Started
              </Text>
            </Link>
          </Flex>
        </Box>
      </Box>

      {/* Simplify */}
      <Box
        backgroundColor="hsl(12, 88%, 59%)"
        marginTop="128px"
        width="100%"
        overflow="hidden"
        position="relative"
        _before={{
          content: '""',
          display: 'block',
          position: 'absolute',
          top: '-100px',
          left: '21%',
          width: '24rem',
          height: '60rem',
          backgroundColor: 'hsl(12, 88%, 62%)',
          borderRadius: '24rem',
          transform: 'rotate(40deg)',
          zIndex: 1
        }}
        _after={{
          content: '""',
          display: 'block',
          position: 'absolute',
          top: -180,
          right: -30,
          width: '20rem',
          height: '20rem',
          backgroundColor: 'hsl(12, 88%, 62%)',
          borderRadius: '24rem',
          transform: 'rotate(40deg)',
          zIndex: 1
        }}
      >
        <Flex
          padding="64px 0"
          width="90%"
          margin="0 auto"
          maxWidth="1200px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box position="relative" zIndex="10">
            <Heading fontSize="40px" color="#fff" maxWidth="70%">
              Simplify how your team works today.
            </Heading>
          </Box>
          <Box position="relative" zIndex="10">
            <Link href="/">
              <Text
                as="a"
                display="block"
                color="hsl(12, 88%, 59%)"
                backgroundColor="#fff"
                fontWeight="700"
                textAlign="center"
                px={8}
                py={3}
                rounded={30}
                _hover={{ cursor: 'pointer' }}
              >
                Get Started
              </Text>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export default Home
