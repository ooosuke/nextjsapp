import { colors } from "@/theme/colors";
import styled from "@emotion/styled";
import NextLink from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
};

const StyledLink = styled(NextLink)`
  text-decoration: none;
  color: ${colors("default")};
  transition: "0.3 all";
  &:hover {
    opacity: 0.8;
  }
`;

export const Link: React.FC<Props> = ({ children, href }) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};
