import styled from "styled-components";
import { routes } from "../routes";
import { Link } from "react-router-dom";
import { Gnb } from "./Gnb";
import { SearchButton } from "./SearchButton";

const Sheader = styled.header`

`;
const Logo = styled.div`
font-size:28px;`;


export const Header = () => {
    return (
        <Sheader>
            <Logo>
                <Link to={routes.home}> PCMovie</Link>
            </Logo>
            <Gnb />
            <SearchButton/>
        </Sheader>
    )
}