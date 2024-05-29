import { ChakraProvider } from "@chakra-ui/react";
import Login from "./Components/Login";
import Registration from "./Components/Registration";


function App() {
  return (
    <div>
      <ChakraProvider>
        <Registration />
      </ChakraProvider>
    </div>
  );
}
export default App;