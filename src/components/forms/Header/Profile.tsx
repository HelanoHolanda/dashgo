import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="8" ml="-12" textAlign="right">
        <Text>Fulano de tal</Text>
        <Text fontSize="small" color="teal.300">
          fulano@teste.com
        </Text>
      </Box>
      <Avatar name="Fulano Tal" src="https://bit.ly/dan-abramov" />
    </Flex>
  );
};

export default Profile;
