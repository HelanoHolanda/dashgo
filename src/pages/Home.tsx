import { Flex } from "@chakra-ui/react";
import InputForm from "../components/forms/InputForm";

const Home = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      background="gray.900"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={400}
        background="silver"
        direction="column"
        p={2}
        borderRadius={8}
        boxShadow="dark-lg"
      >
        <InputForm />
      </Flex>
    </Flex>
  );
};

export default Home;
