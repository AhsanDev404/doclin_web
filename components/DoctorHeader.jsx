"use client";
import { Box, Button, Input, Flex } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { adminNav, doctorNavigation } from "@/utils/constants";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminTopBar() {
  const [navItem, setNavItem] = useState();
  const { control, handleSubmit } = useForm();
  const pathname = usePathname();

  useEffect(() => {
    doctorNavigation.map((item) => pathname === item.link && setNavItem(item));
  }, [pathname]);

  const onSubmit = (data) => {
    console.log("Search query:", data.search);
    // Perform search logic here
  };

  return (
    <Box
      position="sticky"
      top="0"
      bg="black"
      color="white"
      p={5}
      borderBottom="1px"
      borderColor="gray.200"
      boxShadow="md"
      zIndex="50"
      w={"100%"}
    >
      <Flex justify="space-between" align="center">
        <Flex gap={5} align="center" fontSize="xl">
          <Box>{navItem && navItem.icon}</Box>
          <Box fontWeight="bold">{navItem && navItem.title}</Box>
        </Flex>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex align="center">
            <Controller
              name="search"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Search..."
                  border="1px"
                  borderRadius="md"
                  px={2}
                  py={1}
                />
              )}
            />
            <Button ml={2} type="submit">
              <FaSearch size={20} />
            </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
}
