import styled from "styled-components";

const Container = styled.footer`
  padding-top: 90%;
  width: 100%;
  padding: 100px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 900px) {
    padding-top: 95%;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 600px) {
  }

  @media screen and (max-width: 480px) and (min-width: 300px) {
    display: none;
  }
`;

export const Footer = () => {
  return <Container>&copy; 2023 Cpcoding</Container>;
};
