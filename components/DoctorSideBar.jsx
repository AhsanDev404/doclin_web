import { doctorNavigation } from "@/utils/constants";
import { Box, Button, Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
export default function DoctorSideBar() {
  return (
    <Box
      overflowY="scroll"
      height="100vh"
      bg="black"
      color="white"
      pl={5}
      pt={5}
      width="72"
      position="sticky"
      top={0}
      className="customScrollBar"
    >
      <Box display={'flex'} flexDir={"column"} justifyContent={"space-between"} h={"95vh"}>
        <Box>
        <Box>logo</Box>

<Box paddingTop={50}>
  {doctorNavigation.map((item, index) => (
    <Box paddingTop={5} key={index} display="flex" alignItems="center">
      <Link href={item.link}>
        <Button
          leftIcon={item.icon}
          colorScheme={"white"}
          variant={"link"}
        >
          {item.title}
        </Button>
      </Link>
    </Box>
  ))}
</Box>
        </Box>

        <Box mb={10}>
          <Button variant={"link"} colorScheme={"white"} leftIcon={<FaUser />}>
            Profile
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
