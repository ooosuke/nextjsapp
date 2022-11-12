import styled from "@emotion/styled";

type Props = {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "small" | "span";
    type?:
        | "secondary"
        | "success"
        | "light"
        | "primary"
        | "danger"
        | "warning"
        | "info"
        | "default";
    align?: "inherit" | "justify" | "left" | "right" | "center" | "justify-all";
    children: React.ReactNode;
};

const colors = (color: Props["type"]) => {
    switch (color) {
        case "primary":
            return "#1976d2";
        case "secondary":
            return "#6C757D";
        case "success":
            return "#2e7d32";
        case "danger":
            return "#d32f2f";
        case "warning":
            return "#ff9800";
        case "info":
            return "#0288d1";
        case "light":
            return "#F8F9FA";
        default:
            return "#212529";
    }
};

const Section = styled.section<Props>`
    color: ${(props) => colors(props.type)};
    text-align: ${(props) => props.align};
`;

export const Typography: React.FC<Props> = ({
    variant = "p",
    type = "default",
    align = "inherit",
    children,
}) => {
    const Element = Section.withComponent(variant);
    return (
        <Element color={type} align={align}>
            {children}
        </Element>
    );
};
