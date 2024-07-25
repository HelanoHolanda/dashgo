import { Box, Text, Flex, Input, Icon, HStack, Avatar } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

const Header = () => {
  return (
    <Box w="100%" bg="gray.700" maxWidth={1480} h="20" mx="auto">
      <Flex px={8} py={4}>
        <Text fontSize="3xl" fontWeight="bold" mr={6} color="gray.200">
          Dashgo
          <Text as="span" color="teal.300">
            .
          </Text>
        </Text>
        <Flex
          as="label"
          py="2"
          px="8"
          ml="2"
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
        <Flex align="center" ml="auto">
          <HStack
            spacing="4"
            mr="16"
            pr="4"
            py="1"
            borderRightWidth={1}
            borderColor="teal.300"
          >
            <Icon as={RiNotificationLine} color="teal.300" fontSize="18" />
            <Icon as={RiUserAddLine} color="teal.300" fontSize="18" />
          </HStack>
          <Flex align="center">
            <Box mr="8" ml="-12" textAlign="right">
              <Text>Fulano de tal</Text>
              <Text fontSize="small" color="teal.300">
                fulano@teste.com
              </Text>
            </Box>
            <Avatar name="Fulano Tal" src="https://bit.ly/dan-abramov" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
