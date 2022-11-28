import { usePost } from "@/features/post/api/getPost";
import { useNextRouter } from "@/hooks/useUrlQuery";
import { Button, Container, Heading, HStack } from "@chakra-ui/react";

export const Post: React.FC = () => {
  const {
    query: { id },
    router,
  } = useNextRouter<{ id: number }>();
  const post = usePost({ id });
  console.log(post);
  return (
    <Container>
      <HStack>
        <Heading marginBottom={30}>Post.</Heading>
        <Button bg="green.300" color="white" onClick={() => router.back()}>
          go back
        </Button>
      </HStack>
    </Container>
  );
};
