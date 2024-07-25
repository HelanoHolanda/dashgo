import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  RiDashboard2Line,
  RiGitForkLine,
  RiInputMethodFill,
  RiUserFill,
} from "react-icons/ri";

const SideBar = () => {
  return (
    <Box as="aside" w="64" h="auto" rounded="sm">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL{" "}
          </Text>
          <Stack spacing="4" mt="8" align="stretch" color="gray.300">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboard2Line} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiUserFill} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO{" "}
          </Text>
          <Stack spacing="4" mt="8" align="stretch" color="gray.300">
            <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodFill} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Formulários
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiGitForkLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default SideBar;
