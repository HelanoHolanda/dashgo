import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PropsNavSection {
  title: string;
  children: ReactNode;
}

const NavSection = ({ title, children }: PropsNavSection) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch" color="gray.300">
        {children}
      </Stack>
    </Box>
  );
};

export default NavSection;
