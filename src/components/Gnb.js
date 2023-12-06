import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilm,
  faTv,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavWrap = styled.ul`
  margin-right: 55%;
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
  @media screen and (max-width: 1600px) {
    margin-right: 35%;
  }
  @media screen and (max-width: 1024px) {
    margin-right: 30%;
  }
  @media screen and (max-width: 900px) {
    margin-right: 25%;
    font-size: 18px;
  }
  @media screen and (max-width: 800px) {
    width: 240px;
    li:first-child {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    margin-right: 10%;
    width: 200px;
    font-size: 16px;
  }
  @media screen and (max-width: 560px) {
    display: none;
  }
`;
const Logo = styled.div`
  font-size: 28px;
  width: 200px;
  font-weight: 700;
  margin-right: 80px;
  font-family: "oswald";
  line-height: 50px;
  @media screen and (max-width: 1200px) {
    width: 185px;
    margin-right: 65px;
  }
  @media screen and (max-width: 900px) {
    margin-right: 25px;
    width: 150px;
  }
  @media screen and (max-width: 768px) {
    margin-right: 15px;
    width: 140px;
  }
`;

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 110px;
  height: 30px;
  font-size: 16px;

  a {
    display: flex;
  }
  h3 {
    margin-left: 5px;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 34px;
  }
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
  @media screen and (max-width: 320px) and (min-width: 300px) {
    width: 80px;
    font-size: 14px;
  }
`;

const SearchButton = styled.button`
  all: unset;
`;

export const Gnb = () => {
  return (
    <Container>
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
      <SearchWrap>
        <SearchButton>
          <Link to={routes.search}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <h3>SEARCH</h3>
          </Link>
        </SearchButton>
      </SearchWrap>
    </Container>
  );
};
