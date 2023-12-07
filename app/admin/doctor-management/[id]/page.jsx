import React from "react";
import {
  Box,
  Button,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { IoIosInformationCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { doctorAppointment } from "@/utils/constants";



export default function Page() {
  return (
    <Box p={10}>
      <Box m={5} display={"flex"} justifyContent={"flex-end"}>
        <Button colorScheme={"yellow"}>Edit</Button>
      </Box>
      <TableContainer border={1} borderRadius={10}>
        <Table variant="simple" bg="black" color="white">
          <Thead>
            <Tr color={"white"}>
              <Th>Id</Th>
              <Th>Booking Day</Th>
              <Th>Booking Time</Th>
              <Th>Booking Date</Th>
              <Th>patient Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {doctorAppointment.map((appointment) => (
              <Tr key={appointment.id}>
                <Td>{appointment.id}</Td>
                <Td>{appointment.bookingDay}</Td>
                <Td>{appointment.bookingTime}</Td>
                <Td>{appointment.bookingDate}</Td>
                <Td>{appointment.patientName}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
