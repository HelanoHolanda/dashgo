import { Input, VStack, Button, Heading } from "@chakra-ui/react";
import { IoMdLogIn } from "react-icons/io";
const InputForm = () => {
  return (
    <VStack p="8">
      <Heading color="gray.700" mb={4}>
        {" "}
        Login{" "}
      </Heading>

      <Input
        type="email"
        placeholder="E-mail"
        size="md"
        variant="filled"
        borderColor="gray.500"
        focusBorderColor="gray.500"
        mb={2}
      />
      <Input
        type="password"
        placeholder="Senha"
        size="md"
        variant="filled"
        borderColor="gray.500"
        focusBorderColor="gray.500"
      />
      <Button
        mt={4}
        rightIcon={<IoMdLogIn />}
        colorScheme="blackAlpha"
        variant="outline"
      >
        Entrar
      </Button>
    </VStack>
  );
};

export default InputForm;
