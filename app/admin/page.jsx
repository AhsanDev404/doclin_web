'use client'
import SameDataComposedChart from '@/graphs/SameDataComposedChart'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function page() {
  return (
    <div>
      <Box bg={"black"} m={10} p={10} borderRadius={40}>
        <Text color={"white"} fontSize={"4xl"}>Bookings</Text>
      <SameDataComposedChart />
      </Box>
      <Box bg={"black"} m={10} p={10} borderRadius={40}>
        <Text color={"white"} fontSize={"4xl"}>Clients</Text>
      <SameDataComposedChart />
      </Box>
      <Box bg={"black"} m={10} p={10} borderRadius={40}>
        <Text color={"white"} fontSize={"4xl"}>Doctors</Text>
      <SameDataComposedChart />
      </Box>
    </div>
  )
}
