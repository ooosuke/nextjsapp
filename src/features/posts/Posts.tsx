import { usePosts } from "@/features/posts/api/getPosts";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Posts: React.FC<{}> = ({}) => {
  const { data: posts } = usePosts();
  const router = useRouter();

  return (
    <>
      <Container>
        <HStack>
          <Heading marginBottom={30}>Posts.</Heading>
          <Button bg="green.300" color="white" onClick={() => router.back()}>
            go back
          </Button>
        </HStack>
        <Box>
          <Table>
            <TableCaption>posts</TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              {posts.map(({ id, title, body }) => (
                <Tr key={id}>
                  <Td>{title}</Td>
                  <Td>{body}</Td>
                  <Td>
                    <Button
                      onClick={() => {
                        router.push(`/posts/${id}`);
                      }}
                    >
                      detail
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Container>
    </>
  );
};
