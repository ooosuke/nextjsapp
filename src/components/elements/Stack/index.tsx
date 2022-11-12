import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
  spacing?: number;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
};

export const Stack = styled.div<Props>`
  padding: 16px;
  display: flex;
  gap: ${(props) => (props.spacing || 1) * 8}px;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
`;
