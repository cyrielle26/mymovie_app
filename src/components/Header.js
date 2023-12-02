import styled from "styled-components";
import { routes } from "../routes";
import { Link } from "react-router-dom";
import { Gnb } from "./Gnb";
import { SearchHandler } from "./SearchHandler";
import { useRef, useEffect} from "react";


const Sheader = styled.header`
width: 100vw;
height: 95px;
padding: 20px 5%;
background: linear-gradient(180deg,rgba(4,7,20,1) 0%, rgba(11,14,26,70) 32%,  rgba(87,89,98,0) 100%);
display: flex;
justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const GnbWrap = styled.div`
display:flex;
justify-content:space-around;`;

const Logo = styled.div`
font-size:28px;
font-weight:700;
margin-right:80px;
font-family:'oswald';
`;


export const Header = () => {

    const headerRef = useRef();

    useEffect(() => {
      const scrollHandler = () => {
        const pageY = window.scrollY;
    
        if (pageY > 300) {
          headerRef.current.style.position = "fixed";
          headerRef.current.style.backgroundColor = "rgba(0,0,0,0.7)";
          headerRef.current.style.backdropFilter = "blur(3px)";
        } else {
          headerRef.current.style.position = "absolute";
          headerRef.current.style.backgroundColor = "transparent";
          headerRef.current.style.backdropFilter = "blur(0px)";
        }
      };
    
      window.addEventListener("scroll", scrollHandler);
    
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", scrollHandler);
      };
    }, []); // Empty dependency array ensures the effect runs only once
  
    return (
        <Sheader ref={headerRef}>
            <GnbWrap>
            <Logo>
                <Link to={routes.home}> PCMovie</Link>
            </Logo>
                <Gnb />
            </GnbWrap>
            <SearchHandler/>
        </Sheader>
    )
}