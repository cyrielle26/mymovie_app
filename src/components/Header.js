import styled from "styled-components";
import { routes } from "../routes";
import { Link } from "react-router-dom";
import { Gnb } from "./Gnb";
import { SearchButton } from "./SearchButton";

const Sheader = styled.header`
width: 100vw;
height: 95px;
padding: 20px 5%;
background: linear-gradient(180deg,rgba(4,7,20,1) 0%, rgba(11,14,26,92) 32%, rgba(23,26,38,77) 72%, rgba(87,89,98,0) 100%);
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
margin-right:80px;`;


export const Header = () => {
    return (
        <Sheader>
            <GnbWrap>
            <Logo>
                <Link to={routes.home}> PCMovie</Link>
            </Logo>
                <Gnb />
            </GnbWrap>
            <SearchButton/>
        </Sheader>
    )
}