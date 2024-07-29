import { Flex, Icon, Input, useBreakpointValue } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

const SearchInput = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      {!isMobile && (
        <Flex
          as="label"
          py="2"
          px={["4", "8"]}
          mr="2"
          maxWidth={400}
          alignSelf="center"
          alignItems="center"
          color="gray.200"
          position="relative"
          bg="gray.800"
          rounded="full"
        >
          <Input
            color="gray.50"
            variant="unstyled"
            placeholder="Buscar na plataforma"
            _placeholder={{ color: "teal.300" }}
            px="2"
            ml="4"
          />
          <Icon as={RiSearchLine} color="teal.300" fontSize="18" />
        </Flex>
      )}
    </>
  );
};

export default SearchInput;
