import { Box, Button, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const SignupForm = () => {
  return (
    <Box
      display={"flex"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        w="full"
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        p={8}
        bg="white"
        color="black"
        boxShadow="lg"
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="email" id="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </FormControl>
          {/* Additional Signup Fields */}
          <FormControl>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
            />
          </FormControl>
          <Button colorScheme="blue" variant="outline">
            Sign Up
          </Button>
          <Text textAlign={'center'}>
            Already have an account?{" "}
            <Link style={{fontWeight:"bold"}} href="/">
             Login
            </Link>
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignupForm;
