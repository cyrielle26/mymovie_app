import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "../routes";

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

export const SearchHandler = () => {
  return (
    <SearchWrap>
      <SearchButton>
        <Link to={routes.search}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <h3>SEARCH</h3>
        </Link>
      </SearchButton>
    </SearchWrap>
  );
};
