import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faTv,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useRef, useEffect } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TopCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TopMobileNav = styled.ul`
  margin-top: 30px;
  display: flex;
  font-size: 18px;
  height: 30px;
  margin-bottom: 20px;

  li {
    display: flex;
    margin-right: 50px;
  }
  a {
    display: flex;
    @media screen and (max-width: 530px) {
      flex-direction: column;
    }
  }
  h3 {
    margin-left: 5px;

    @media screen and (max-width: 530px) {
      margin-left: 0;
      margin-top: 5px;
    }
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }

  @media screen and (max-width: 415px) and (min-width: 300px) {
    font-size: 14px;
  }
`;

const Logo = styled.div`
  font-size: 28px;
  width: 140px;
  font-weight: 700;
  margin-right: 80px;
  font-family: "oswald";
  @media screen and (max-width: 450px) {
    font-family: 24px;
  }
  @media screen and (max-width: 350px) and (min-width: 300px) {
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

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
  @media screen and (max-width: 350px) and (min-width: 300px) {
    font-size: 14px;
  }
`;

const SearchButton = styled.button`
  all: unset;
`;

export const MobileGnb = () => {
  const topMobileHomeNavRef = useRef();

  useEffect(() => {
    const scrollHandler = () => {
      const pageY = window.scrollY;

      if (topMobileHomeNavRef.current) {
        if (pageY > 300) {
          topMobileHomeNavRef.current.style.display = "none";
        } else {
          topMobileHomeNavRef.current.style.display = "flex";
        }
      }
    };

    window.addEventListener("scroll", scrollHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [topMobileHomeNavRef]); // Add mobileHomeNavRef to the dependency array

  return (
    <Container>
      <TopCon>
        <Logo>
          <Link to={routes.home}> PCMovie</Link>
        </Logo>
        <SearchWrap>
          <SearchButton>
            <Link to={routes.search}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <h3>SEARCH</h3>
            </Link>
          </SearchButton>
        </SearchWrap>
      </TopCon>
      <TopMobileNav ref={topMobileHomeNavRef}>
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
      </TopMobileNav>
    </Container>
  );
};
