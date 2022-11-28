import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useToast,
  VStack,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCheckCircle, MdArrowRight } from "react-icons/md";

export function Home() {
  const toast = useToast();
  const router = useRouter();
  return (
    <Container>
      <Heading marginBottom={30}>Home.</Heading>
      <HStack spacing={4} alignItems="start">
        <Box w={200} p={4} borderWidth={1} bg="tomato" color="white">
          <Text>Stacks.</Text>
          <Divider />
          <List spacing={3}>
            <ListItem
              cursor="pointer"
              onClick={() => {
                toast({
                  title: "chakra-ui",
                  description: "simple ui framework",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }}
            >
              <ListIcon as={MdCheckCircle} color="white" />
              chakra-ui
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="white" />
              react-query
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="white" />
              nextjs
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="white" />
              zustand
            </ListItem>
          </List>
        </Box>
        <Box w={200} p={4} bg="green.300" color="white">
          <HStack>
            <Link onClick={() => router.push("/posts")}>go to posts page.</Link>
            <MdArrowRight />
          </HStack>
        </Box>
      </HStack>
    </Container>
  );
}
