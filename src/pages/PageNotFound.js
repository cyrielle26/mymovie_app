import styled from "styled-components";
import { Link } from "react-router-dom";
import { Home } from "./home/Home";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-weight: bolder;
  font-family: "montserrat";
  font-size: 38px;
  padding: 20%;
`;

export const PageNotFound = () => {
  return (
    <Container>
      <h1>An error as occured.</h1>
      <h1>
        <span> (╯°□°）╯︵ ┻━┻ </span>
      </h1>
      <Link to={<Home />}>Go back</Link>
    </Container>
  );
};
