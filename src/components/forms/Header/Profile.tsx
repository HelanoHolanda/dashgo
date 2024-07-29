import { Avatar, Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

const Profile = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex align="center">
      {!isMobile && (
        <Box mr="8" ml="-12" textAlign="right">
          <Text>Fulano de tal</Text>
          <Text fontSize="small" color="teal.300">
            fulano@teste.com
          </Text>
        </Box>
      )}
      <Avatar name="Fulano Tal" src="https://bit.ly/dan-abramov" />
    </Flex>
  );
};

export default Profile;
