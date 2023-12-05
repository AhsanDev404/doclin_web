import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
// Import Link from React Router

const LoginForm = () => {
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
          <Button colorScheme="gray" variant="outline">
            Login
          </Button>
          <Text textAlign={'center'}>
            Don't have a account?{" "}<Link style={{fontWeight:"bold"}} href="/signup">Signup</Link>
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginForm;
