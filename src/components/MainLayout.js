import styled from "styled-components";

const Container = styled.div`
  padding: 55px 5%;
  @media screen and (max-width: 480px) and (min-width: 300px) {
    padding: 2%;
  }
`;

export const MainLayout = ({ children }) => {
  return <Container>{children}</Container>;
};
