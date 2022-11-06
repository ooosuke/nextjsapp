import styled from "@emotion/styled";

type Props = {
  size?: number;
  weight?: string;
};

const Typography = styled.p<Props>`
  font-size: ${({ size }) => size || 12}px;
  font-weight: ${({ weight }) => weight || "normal"};
`;

export default Typography;
