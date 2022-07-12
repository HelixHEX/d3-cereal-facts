import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Carbs from "./components/Carbs";
import TopCereal from "./components/TopCereal";

const App = () => {
  const [currentGraph, setCurrentGraph] = useState("topCereal");
  return (
    <>
      <Flex w="100%" h="100vh" p={{ base: 2, sm: 10, md: 20 }}>
        <Flex flexDir={"column"} rounded={5} bg={"white"} w={"100%"} h={"100%"}>
          {currentGraph === "topCereal" ? <TopCereal /> : <Carbs />}
          <Button
          rounded={0}
            borderBottomRadius={5}
            h={20}
            bg="gray.500"
            onClick={() =>
              setCurrentGraph(
                currentGraph === "topCereal" ? "carbs" : "topCereal"
              )
            }
            _hover={{bg: 'gray.600', 'color': 'white'}}
            fontSize={30}
          >{currentGraph === 'topCereal' ? 'View Carbs Facts' : 'View Top Cerael'}</Button>
        </Flex>
      </Flex>
    </>
  );
};

export default App;
