import styled from "styled-components";

const Container = styled.div`
padding: 55px 5%;
`;


export const MainLayout = ({children}) => {
    return (
        <Container>{children}</Container>
    )
}