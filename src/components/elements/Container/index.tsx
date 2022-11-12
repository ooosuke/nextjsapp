import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
  fluid?: boolean;
};

export const Container = styled.div<Props>`
  padding: 32px;
  margin: 0 auto;
`;
