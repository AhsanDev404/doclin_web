import DoctorHeader from "@/components/DoctorHeader";
import DoctorSideBar from "@/components/DoctorSideBar";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function DoctorLayout({ children }) {
  return <Box>
    <Box display={'flex'}>
        <DoctorSideBar />
        <Box w={"100%"}>
            <DoctorHeader />
            {children}
        </Box>
    </Box>
  </Box>;
}
