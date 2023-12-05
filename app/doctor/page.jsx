import { appointmentData } from "@/utils/constants";
import {
  Box,
  Button,
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

export default function Page() {
  // Sample data for appointments
 

  return (
    <Box p={10}>
      <TableContainer border={1} borderRadius={10}>
        <Table variant="simple" bg="black" color="white">
          <Thead>
            <Tr color={"white"}>
              <Th>Id</Th>
              <Th>Patient Name</Th>
              <Th>Patient Email</Th>
              <Th>Slot Id</Th>
              <Th>Day</Th>
              <Th>Slot Time</Th>
              <Th>Slot Date</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {appointmentData.map((appointment) => (
              <Tr key={appointment.id}>
                <Td>{appointment.id}</Td>
                <Td>{appointment.patientName}</Td>
                <Td>{appointment.patientEmail}</Td>
                <Td>{appointment.slotId}</Td>
                <Td>{appointment.day}</Td>
                <Td>{appointment.date}</Td>
                <Td>{appointment.slotTime}</Td>
                <Td>
                  <Button>
                    Approve
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
