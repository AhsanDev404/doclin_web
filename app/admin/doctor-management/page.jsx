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
} from "@chakra-ui/react";
import Link from "next/link";
import { IoIosInformationCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { doctorData } from "@/utils/constants"; // Update this to fetch doctor data

export default function DoctorManagementPage() {
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
                  <Flex>
                    <Link href={`/admin/doctor-management/${doctor.id}`}>
                      <IoIosInformationCircle size={20} />
                    </Link>
                    <IconButton
                      variant={"link"}
                      color={"red"}
                      icon={<MdDelete size={20} />}
                    />
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
