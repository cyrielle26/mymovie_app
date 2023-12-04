import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useRef, useEffect } from "react";

const Container = styled.div`
  height: 100%;
`;

const BottomMobileNav = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(142, 165, 214, 0.8);

  justify-content: center;
  align-items: center;
  z-index: 10;
  height: 15%;
  font-size: 24px;
  a {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  @media screen and (max-width: 480px) and (min-width: 300px) {
    display: flex;
    justify-content: center;
    align-self: center;
  }
`;

export const MobileHomeBand = () => {
  const bottomMobileHomeNavRef = useRef();

  useEffect(() => {
    const scrollHandler = () => {
      const pageY = window.scrollY;

      if (bottomMobileHomeNavRef) {
        if (pageY < 100) {
          bottomMobileHomeNavRef.current.style.position = "fixed";
          bottomMobileHomeNavRef.current.style.backgroundColor =
            "rgba(142, 165, 214, 0.8)";
          bottomMobileHomeNavRef.current.style.backdropFilter = "blur(3px)";
        } else {
          bottomMobileHomeNavRef.current.style.backgroundColor =
            "rgba(0,0,0,0.7)";
        }
      }
    };

    window.addEventListener("scroll", scrollHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [bottomMobileHomeNavRef]); // Add mobileHomeNavRef to the dependency array

  return (
    <Container>
      <BottomMobileNav ref={bottomMobileHomeNavRef}>
        <Link to={routes.home}>
          <FontAwesomeIcon icon={faHouse} />
          <h3>HOME</h3>
        </Link>
      </BottomMobileNav>
    </Container>
  );
};
