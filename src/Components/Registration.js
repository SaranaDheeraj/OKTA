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

function Registration() {
  return (
    <Box textAlign="center" fontSize="sm" fontFamily="sans-serif">
      <VStack spacing={8}>
        <Box position="relative">
          <Image
            src="https://your-logo-here.com"
            alt="Company Logo"
            width="150px"
            height="150px"
            borderRadius="full"
            position="absolute"
            top="-50px"
            left="50%"
            transform="translate(-50%)"
          />
          <Heading as="h1" fontSize="4xl" mt={10}>
            OKTA REGISTRATION
          </Heading>
        </Box>
        <VStack spacing={5}>
          <FormControl>
            <FormLabel htmlFor="email">User Name</FormLabel>
            <Input id="uname" type="text" variant="filled" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email ID</FormLabel>
            <Input id="email" type="email" variant="filled" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Password</FormLabel>
            <Input id="pswrd" type="text" variant="filled" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Phone Number</FormLabel>
            <Input id="number" type="text" variant="filled" />
          </FormControl> 
          <Button variant="solid" colorScheme="teal">
            Submit
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}

export default Registration;
