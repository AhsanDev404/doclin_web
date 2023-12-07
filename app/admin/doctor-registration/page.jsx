import React from "react";
import {
  Box,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  IconButton,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoIosInformationCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { doctorData } from "@/utils/constants"; // Update this to fetch doctor data

export default function DoctorManagementPage() {
  const handleApprove = (doctorId) => {
    // Logic to handle approval for the doctor with ID 'doctorId'
    console.log(`Doctor ID ${doctorId} approved.`);
  };

  const handleDisapprove = (doctorId) => {
    // Logic to handle disapproval for the doctor with ID 'doctorId'
    console.log(`Doctor ID ${doctorId} disapproved.`);
  };

  return (
    <Box p={10}>
      <TableContainer border={1} borderRadius={10}>
        <Table variant="simple" bg="black" color="white">
          <Thead>
            <Tr color={"white"}>
              <Th>Id</Th>
              <Th>Doctor Name</Th>
              <Th>Specialization</Th>
              <Th>Experience</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {doctorData.map((doctor) => (
              <Tr key={doctor.id}>
                <Td>{doctor.id}</Td>
                <Td>{doctor.doctorName}</Td>
                <Td>{doctor.specialization}</Td>
                <Td>{doctor.experience} years</Td>
                <Td>
                  <Flex alignItems={"center"} gap={5}>
                    <Button colorScheme="green">Approve</Button>
                    <Button colorScheme="red">Disapprove</Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
