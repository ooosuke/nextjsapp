import styled from "@emotion/styled";

const List = styled.ul`
    list-style: none;
`;

const ListItem = styled.li``;

export default Object.assign(List, {
    Item: ListItem,
});
