import styled from "styled-components"

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
font-family: "Montserrat", "sans-serif";
font-weight: bolder;
`;

export const PageNotFound = () => {
    return (
        <Container>
            <h1>An error as occured.</h1>
	<h1> <span>(╯°□°）╯︵ ┻━┻</span></h1>
	<a href="#">Go back</a>
        </Container>
    )
}


