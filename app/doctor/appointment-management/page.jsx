import { appointmentDaysData } from "@/utils/constants";
import {
  Box,
  FormLabel,
  Switch,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IoIosInformationCircle } from "react-icons/io";



export default function Page() {
  return (
    <Box p={10}>
      <TableContainer border={1} borderRadius={10}>
      <Table variant="simple" bg="black" color="white">
          <Thead>
            <Tr color={"white"}>
              <Th>Day</Th>
              <Th>Available Time Slot</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {appointmentDaysData.map((item, index) => (
              <Tr
              _hover={{ bg: "white", color: "black" }}
              cursor="pointer"
              key={index}
            >
                <Td>
                 <Box display={"flex"}>
                 <FormLabel htmlFor={`day-${index}`}  w={100}>
                    {item.day}
                  </FormLabel>
                  <Switch colorScheme={"green"} id={`day-${index}`} />
                 </Box>
                </Td>
                <Td>{item.slots}</Td>
                <Td>
                  <Link href={item.link}>
                    <IoIosInformationCircle size={20} />
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
