import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFilm, faTv } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useRef, useEffect } from "react";

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
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-right: 80px;
  font-family: "oswald";
`;

const TopMobileNav = styled.div`
  font-size: 16px;
  width: 350px;
  height: 30px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h3 {
    margin-left: 5px;
  }
  @media screen and (min-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    display: block;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const BottomMobileNav = styled.div`
  width: 100vw;
  height: 95px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 8;
`;

export const Gnb = () => {
  const mobileHomeNavRef = useRef();

  useEffect(() => {
    const scrollHandler = () => {
      const pageY = window.scrollY;

      if (pageY > 300) {
        mobileHomeNavRef.current.style.position = "fixed";
        mobileHomeNavRef.current.style.backgroundColor = "rgba(0,0,0,0.7)";
        mobileHomeNavRef.current.style.backdropFilter = "blur(3px)";
      } else {
        mobileHomeNavRef.current.style.position = "absolute";
        mobileHomeNavRef.current.style.backgroundColor = "transparent";
        mobileHomeNavRef.current.style.backdropFilter = "blur(0px)";
      }
    };
    window.addEventListener("scroll", scrollHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); // Empty dependency array ensures the effect runs only once

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
      <TopMobileNav>
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
      <BottomMobileNav>
        <Link to={routes.movies}>
          <FontAwesomeIcon icon={faFilm} />
          <h3>MOVIES</h3>
        </Link>
      </BottomMobileNav>
    </>
  );
};
