import {
  Box,
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import NotificationsNav from "./NotificationsNav";
import Profile from "./Profile";
import { useSideBarDrawer } from "../../../context/ContextSideBar";
import { RiMenuLine } from "react-icons/ri";

const Header = () => {
  const { onOpen } = useSideBarDrawer();

  const isWideVersion = useBreakpointValue({ base: true, md: false });

  return (
    <Box w="100%" bg="gray.700" maxWidth={1480} h="20" mx="auto">
      <Flex px={8} py={4} justify="center">
        {!!isWideVersion && (
          <IconButton
            onClick={onOpen}
            aria-label="open"
            fontSize="24"
            mr="2"
            mt="1"
            color="teal.300"
            variant="unstyled"
            icon={<Icon as={RiMenuLine} />}
          ></IconButton>
        )}
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

export default Header;
