import { Nav } from "@/components/Nav";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

const Main = styled.div`
  width: 100vw;
  height: calc(100vh - 16px);
`;

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Main>
      <Nav />
      {children}
    </Main>
  );
};
