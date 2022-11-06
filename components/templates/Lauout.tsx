import * as React from "react";
import styled from "@emotion/styled";

type Props = {
    children: React.ReactNode;
};

const Container = styled.div`
    width: 1080px;
    margin: 0 auto;
`;

const Layout: React.FC<Props> = ({ children }) => (
    <Container>{children}</Container>
);

export default Layout;
