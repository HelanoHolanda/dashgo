import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

const NotificationsNav = () => {
  return (
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
  );
};

export default NotificationsNav;
