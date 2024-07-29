import { Box, useBreakpointValue } from "@chakra-ui/react";
import SideBarNavMobile from "./SideBarNavMobile";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useSideBarDrawer } from "../../../context/ContextSideBar";

const SideBar = () => {
  const { isOpen, onClose } = useSideBarDrawer();
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.700">
          <DrawerCloseButton mt={2} />
          <DrawerHeader color="teal.300">Navegação</DrawerHeader>
          <DrawerBody>
            <SideBarNavMobile />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" h="auto" rounded="sm">
      <SideBarNavMobile />
    </Box>
  );
};

export default SideBar;
