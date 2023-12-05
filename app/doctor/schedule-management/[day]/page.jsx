import { sundayAppointments } from "@/utils/constants";
import {
  Box,
  Flex,
  FormLabel,
  IconButton,
  Switch,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IoIosInformationCircle, IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
export default function Page() {
  // Sample data for appointments on Sunday
  

  return (
    <Box p={10}>
      <Text fontSize="6xl" textAlign="center">
        Sunday
      </Text>
      <Flex m={5} justifyContent="flex-end">
        <IconButton borderRadius="full" icon={<IoIosAddCircle size={50} />} />
      </Flex>
      <TableContainer border={1} borderRadius={10}>
        <Table variant="simple" bg="black" color="white">
          <Thead>
            <Tr color="white">
              <Th>id</Th>
              <Th>Start Time</Th>
              <Th>End Time</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sundayAppointments.map((item, index) => (
              <Tr key={index}>
                <Td>{item.id}</Td>
                <Td>{item.startTime}</Td>
                <Td>{item.endTime}</Td>
                <Td>
                  <Flex>
                    <Link href={item.editLink}>
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
