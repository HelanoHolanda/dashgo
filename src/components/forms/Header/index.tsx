import { Box, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import NotificationsNav from "./NotificationsNav";
import Profile from "./Profile";

const index = () => {
  return (
    <Box w="100%" bg="gray.700" maxWidth={1480} h="20" mx="auto">
      <Flex px={8} py={4}>
        <Logo />
        <SearchInput />
        <Flex align="center" ml="auto">
          <NotificationsNav />
          <Profile />
        </Flex>
      </Flex>
    </Box>
  );
};

export default index;
