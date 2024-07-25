import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Header from "../../components/forms/Header";
import SideBar from "../../components/forms/SideBar";
import Pagination from "../../components/forms/Pagination";
import CreatUsers from "./CreatUsers";

const ListUser = () => {
  return (
    <Box w="100vw" h="100vh" background="gray.900">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" gap={2}>
        <SideBar />
        <Box flex="1" borderRadius={8} background="gray.700" p="2">
          <Flex justify="space-between" align="center">
            <Heading color="gray.400" size="lg">
              Usuários
            </Heading>

            <CreatUsers />
          </Flex>
          <Table colorScheme="gray.200" mt={4}>
            <Thead>
              <Tr>
                <Th px="6" width="8">
                  <Checkbox colorScheme="teal" />
                </Th>
                <Th>
                  <Text color="gray.300">Usuário</Text>
                </Th>
                <Th>
                  <Text color="gray.300">Data de cadastro</Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody color="gray.600">
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="teal" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">fulano</Text>
                    <Text fontSize="sm" color="teal.200">
                      fulano@teste.com
                    </Text>
                  </Box>
                </Td>
                <Td>05 de Março, 2026</Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="teal" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">fulano</Text>
                    <Text fontSize="sm" color="teal.200">
                      fulano@teste.com
                    </Text>
                  </Box>
                </Td>
                <Td>05 de Março, 2026</Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default ListUser;
