import { Container } from "@/components/elements/Container";
import { Stack } from "@/components/elements/Stack";
import { Typography } from "@/components/elements/Typography";

export const Posts: React.FC<{}> = ({}) => {
  return (
    <Container>
      <Stack justifyContent="center" alignItems="center">
        <Typography>Posts</Typography>
      </Stack>
    </Container>
  );
};
