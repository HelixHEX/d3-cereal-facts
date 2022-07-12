import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import ShreddedWheat from "./components/ShreddedWheat";
import TopCereal from "./components/TopCereal";

const App = () => {
  const [currentGraph, setCurrentGraph] = useState("topCereal");
  return (
    <>
      <Flex w="100%" h="100vh" p={{ base: 2, sm: 10, md: 20 }}>
        <Flex flexDir={"column"} rounded={5} bg={"white"} w={"100%"} h={"100%"}>
          {currentGraph === "topCereal" ? <TopCereal /> : <ShreddedWheat />}
          <Button
            rounded={0}
            borderBottomRadius={5}
            h={20}
            bg="gray.500"
            onClick={() =>
              setCurrentGraph(
                currentGraph === "topCereal" ? "shredded" : "topCereal"
              )
            }
            _hover={{ bg: "gray.600", color: "white" }}
            fontSize={30}
          >
            {currentGraph === "topCereal"
              ? "View Shredded Wheat Facts"
              : "View Top Ceraels"}
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default App;
