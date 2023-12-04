import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFilm, faTv } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const NavWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  width: 350px;
  height: 30px;
  a {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 5px;
  }
  @media screen and (max-width: 900px) {
    width: 400px;
    font-size: 18px;
  }
  @media screen and (max-width: 600px) {
    width: 300px;
  }
  @media screen and (max-width: 500px) {
    width: 280px;
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const Logo = styled.div`
  font-size: 28px;
  width: 200px;
  font-weight: 700;
  margin-right: 80px;
  font-family: "oswald";
  @media screen and (max-width: 1200px) {
    width: 185px;
    margin-right: 65px;
  }

  @media screen and (max-width: 900px) {
    margin-right: 25px;
    width: 150px;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Gnb = () => {
  return (
    <>
      <Logo>
        <Link to={routes.home}> PCMovie</Link>
      </Logo>
      <NavWrap>
        <li>
          <Link to={routes.home}>
            <FontAwesomeIcon icon={faHouse} />
            <h3>HOME</h3>
          </Link>
        </li>
        <li>
          <Link to={routes.movies}>
            <FontAwesomeIcon icon={faFilm} />
            <h3>MOVIES</h3>
          </Link>
        </li>
        <li>
          <Link to={routes.series}>
            <FontAwesomeIcon icon={faTv} />
            <h3>SERIES</h3>
          </Link>
        </li>
      </NavWrap>
    </>
  );
};
