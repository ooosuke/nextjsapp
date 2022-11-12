import { ColorType, colors } from "@/theme/colors";
import styled from "@emotion/styled";

type Props = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "small" | "span";
  type?: ColorType;
  align?: "inherit" | "justify" | "left" | "right" | "center" | "justify-all";
  children: React.ReactNode;
} & React.HtmlHTMLAttributes<HTMLElement>;

const Section = styled.section<Props>`
  color: ${(props) => colors(props.type)};
  text-align: ${(props) => props.align};
`;

export const Typography: React.FC<Props> = ({
  variant = "p",
  type = "default",
  align = "inherit",
  children,
  ...rest
}) => {
  const Element = Section.withComponent(variant);
  return (
    <Element color={type} align={align} {...rest}>
      {children}
    </Element>
  );
};
