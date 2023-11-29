import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "../routes";


const SearchWrap = styled.div`
display: flex;
align-items: center;
justify-content:flex-end;
width: 110px;
height:30px;
font-size: 16px;

a{
    display: flex;
}
h3{
    margin-left: 5px;
}`;

export const SearchButton = () => {
    return <SearchWrap>

        <Link to={routes.search}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <h3>SEARCH</h3>
        </Link>

    </SearchWrap>
}