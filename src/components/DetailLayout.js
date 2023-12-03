import styled from "styled-components";

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
`;


const ConWrap = styled.div`
width: 100%;
padding: 100px 150px 100px;
display: flex;
justify-content:space-between;
@media screen  and (max-width:815px){
    padding: 100px;
}
@media screen and (max-width:450px){
    flex-direction: column;
    padding: 100px 5%;
}
`;


export const DetailLayout = () => {
    return (
        <Container>
            <ConWrap></ConWrap>
        </Container>)
}