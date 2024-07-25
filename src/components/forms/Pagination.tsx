import { Box, Button, Stack } from "@chakra-ui/react";

const Pagination = () => {
  return (
    <Stack direction="row" mt="8" px="2" justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Box display="flex" gap={2}>
        <Button
          size="sm"
          fontSize="xs"
          colorScheme="teal"
          disabled
          _disabled={{ bg: "teal.500", cursor: "default" }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          bg="gray.500"
          _hover={{ bg: "gray.400" }}
        >
          2
        </Button>
      </Box>
    </Stack>
  );
};

export default Pagination;
