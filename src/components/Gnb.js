import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const NavWrap = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
font-size:16px;
width: 350px;
height:30px;
a {
    display: flex;
    align-items: center;
}
h3{
    margin-left: 5px;
}
`;


export const Gnb = () => {
    return <NavWrap>
        <li>
            <Link to={routes.home}>
                <FontAwesomeIcon icon={faHouse} /><h3>HOME</h3>
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
}