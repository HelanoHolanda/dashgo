import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import Header from "../components/forms/Header";
import SideBar from "../components/forms/SideBar";

const Dashboard = () => {
  return (
    <Box w="100vw" h="100vh" background="gray.900">
      <Header />
      <Flex w="100%" my="4" maxWidth={1480} mx="auto" gap={2}>
        <SideBar />

        <SimpleGrid flex="1" bg="gray.600"></SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Dashboard;
