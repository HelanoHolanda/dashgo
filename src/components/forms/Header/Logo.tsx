import { Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Text fontSize={["2xl", "3xl"]} fontWeight="bold" mr={6} color="gray.200">
      Dashgo
      <Text as="span" color="teal.300">
        .
      </Text>
    </Text>
  );
};

export default Logo;
