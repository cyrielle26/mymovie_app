import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faTv } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useRef, useEffect } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TopMobileNav = styled.ul`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 5%;
  margin-top: 5px;
  width: 60%;
  justify-content: space-around;
  font-size: 18px;
  height: 30px;
  margin-bottom: 20px;
  li {
    margin: 20px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h3 {
    margin-left: 5px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (min-width: 450px) {
    font-size: 16px;
  }

  @media screen and (min-width: 300px) {
    display: flex;
  }
`;

export const MobileGnb = () => {
  const topMobileHomeNavRef = useRef();

  useEffect(() => {
    const scrollHandler = () => {
      const pageY = window.scrollY;

      if (topMobileHomeNavRef.current) {
        if (pageY > 300) {
          topMobileHomeNavRef.current.style.position = "fixed";
          topMobileHomeNavRef.current.style.backgroundColor = "rgba(0,0,0,0.7)";
          topMobileHomeNavRef.current.style.backdropFilter = "blur(3px)";
        } else {
          topMobileHomeNavRef.current.style.position = "absolute";
          topMobileHomeNavRef.current.style.backgroundColor = "transparent";
          topMobileHomeNavRef.current.style.backdropFilter = "blur(0px)";
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
