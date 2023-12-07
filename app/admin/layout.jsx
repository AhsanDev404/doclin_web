import AdminHeader from '@/components/AdminHeader';
import AdminSideBar from '@/components/AdminSideBar';
import { Box } from '@chakra-ui/react';
import React from 'react'

export default function layout({children}) {
  return (
    <Box>
    <Box display={'flex'}>
        <AdminSideBar />
        <Box w={"100%"}>
          <AdminHeader />
            {children}
        </Box>
    </Box>
  </Box>
  )
}
