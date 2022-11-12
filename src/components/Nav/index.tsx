import { Link } from "@/components/elements/Link";
import { Stack } from "@/components/elements/Stack";
import { routes } from "@/utils/routes";

type Props = {};

export const Nav: React.FC<Props> = ({}) => {
  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end">
      <Link href={routes.home()}>home</Link>
      <Link href={routes.about()}>about</Link>
      <Link href={routes.posts()}>posts</Link>
    </Stack>
  );
};
