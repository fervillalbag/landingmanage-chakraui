import { Box } from '@chakra-ui/react'
import React from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <Box overflowX="hidden">
      <Navbar />
      <Box mt="100px">{children}</Box>
      <Footer />
    </Box>
  )
}

export default Layout
