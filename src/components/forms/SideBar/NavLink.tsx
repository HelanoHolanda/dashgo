import { Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface PropsLink {
  icon: ElementType;
  text: string;
}

const NavLink = ({ icon, text }: PropsLink) => {
  return (
    <Link display="flex" alignItems="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {text}
      </Text>
    </Link>
  );
};

export default NavLink;
