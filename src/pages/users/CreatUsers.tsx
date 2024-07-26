import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  SimpleGrid,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";
import { z } from "zod";
import { RiAddLine } from "react-icons/ri";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
import { User } from "../../database";

const schema = z
  .object({
    name: z.string().min(2, "Nome é obrigatório!"),
    email: z.string().email("Formato de e-mail inválida!"),
    password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres."),
    confirmPassword: z
      .string()
      .min(6, "A senha deve conter no mínimo 6 caracteres."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais.",
    path: ["confirmPassword"],
  });

// Definir o tipo dos dados do formulário
type FormData = {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
interface CreateUserProps {
  addUser: (user: User) => void;
}

const CreateUser: React.FC<CreateUserProps> = ({ addUser }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // hook forms
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // função de submit do formulário
  const createUser: SubmitHandler<FormData> = async (data, event) => {
    event?.preventDefault(); // prevenindo o padrao
    const newUser: User = { id: uuidv4(), name: data.name, email: data.email };
    addUser(newUser); // Passa o novo usuário para a função addUser
    // simulando uma requisição
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // fechamento de modal e resetando os inputs
    onClose();
    reset();
  };

  return (
    <>
      <Button leftIcon={<RiAddLine />} colorScheme="teal" onClick={onOpen}>
        Adicionar
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.100">
          <ModalHeader color="gray.600">Criar Usuário</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(createUser)}>
            <ModalBody>
              <SimpleGrid minChildWidth="240px" spacing="4" w="100%">
                <FormControl isInvalid={!!errors.name}>
                  <Input {...register("name")} placeholder="Nome Completo" />
                  <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email}>
                  <Input {...register("email")} placeholder="E-mail" />
                  <FormErrorMessage>
                    <p>{errors.email?.message}</p>
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password}>
                  <Input
                    {...register("password")}
                    type="password"
                    placeholder="Senha"
                  />
                  <FormErrorMessage>
                    {errors.password?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.confirmPassword}>
                  <Input
                    {...register("confirmPassword")}
                    type="password"
                    placeholder="Confirme a senha"
                  />
                  <FormErrorMessage>
                    {errors.confirmPassword?.message}
                  </FormErrorMessage>
                </FormControl>
              </SimpleGrid>
            </ModalBody>

            <ModalFooter display="flex" gap={2}>
              <Button colorScheme="red" onClick={onClose}>
                Fechar
              </Button>
              <Button colorScheme="teal" type="submit" isLoading={isSubmitting}>
                Salvar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateUser;
