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
import { userData } from "@/utils/constants";



export default function Page() {
  return (
    <Box p={10}>
      <TableContainer border={1} borderRadius={10}>
        <Table variant="simple" bg="black" color="white">
          <Thead>
            <Tr color={"white"}>
              <Th>Id</Th>
              <Th>Patient Name</Th>
              <Th>Patient Email</Th>
              <Th>total bookings</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData.map((appointment) => (
              <Tr key={appointment.id}>
                <Td>{appointment.id}</Td>
                <Td>{appointment.patientName}</Td>
                <Td>{appointment.patientEmail}</Td>
                <Td>{appointment.totalBookings}</Td>
                <Td>
                <Flex>
                <Link href={`/admin/user-management/${appointment.id}`}>
                    <IoIosInformationCircle size={20} />
                  </Link>
                  <IconButton variant={"link"} color={"red"} icon={<MdDelete size={20}/>} />
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
