import styled from "@emotion/styled";

type Props = {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "small" | "span";
    color?:
        | "secondary"
        | "success"
        | "light"
        | "primary"
        | "danger"
        | "warning"
        | "info"
        | "default";
    align?: "inherit" | "justify" | "left" | "right";
    children: React.ReactNode;
};

const colors = (color: Props["color"]) => {
    switch (color) {
        case "primary":
            return "#0D6EFD";
        case "secondary":
            return "#6C757D";
        case "success":
            return "#198754";
        case "danger":
            return "#DC3545";
        case "warning":
            return "#FFC107";
        case "info":
            return "#0EC9F0";
        case "light":
            return "#F8F9FA";
        default:
            return "#212529";
    }
};

const Section = styled.section<Props>`
    color: ${(props) => colors(props.color)};
    text-align: ${(props) => props.align};
`;

export const Typography: React.FC<Props> = ({
    variant = "p",
    color = "default",
    align = "inherit",
    children,
}) => {
    const Element = Section.withComponent(variant);
    return (
        <Element color={color} align={align}>
            {children}
        </Element>
    );
};
