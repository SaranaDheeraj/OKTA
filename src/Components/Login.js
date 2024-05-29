import React from 'react';
import {
  Box,
  Image,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Link,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <Box bgImage="url('/Images/BG.jpg')" bgSize="cover" bgPosition="center" textAlign="center" fontSize="sm" fontFamily="sans-serif" >
      <VStack spacing={8}>
        <Image
          src="https://your-logo-here.com" // Replace with your logo URL
          width="150px"
          height="150px"
          borderRadius="full"
        />
        <Heading>OKTA LOGIN</Heading>
        <VStack spacing={5}>
          <FormControl>
            <FormLabel htmlFor="email">Email ID</FormLabel>
            <Input id="email" type="email" variant="filled" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <Input
                id="password"
                type="password"
                variant="filled"
              />
              <InputRightElement width="4.5rem">
                <Button type="button" variant="ghost">
                  Show
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </VStack>
        <Text>
            <Button variant="solid" colorScheme="teal">
                Submit
            </Button>
            <Button>
            <NavLink to="/register">Register</NavLink>
            </Button>
        </Text>
      </VStack>
    </Box>
  );
}

export default Login;
