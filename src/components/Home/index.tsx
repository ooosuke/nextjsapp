import { Container } from "@/components/elements/Container";
import { Stack } from "@/components/elements/Stack";
import { Typography } from "@/components/elements/Typography";

export const Home: React.FC<{}> = ({}) => {
  return (
    <Container>
      <Stack justifyContent="center" alignItems="center">
        <Typography>Home</Typography>
      </Stack>
    </Container>
  );
};
