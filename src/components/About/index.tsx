import { Container } from "@/components/elements/Container";
import { Stack } from "@/components/elements/Stack";
import { Typography } from "@/components/elements/Typography";

export const About: React.FC<{}> = ({}) => {
  return (
    <Container>
      <Stack justifyContent="center" alignItems="center">
        <Typography>About</Typography>
      </Stack>
    </Container>
  );
};
