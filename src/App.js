import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import Login from "./Components/Login";
import { createBrowserRouter,NavLink,RouterProvider } from "react-router-dom";


function App() {
  return (
    <Box m={3} p={4}>
      This is my Home Page!
      <Button ml={3} colorScheme="green"><NavLink to='/login'>Login</NavLink></Button>
    </Box>
  );
}
export default App;