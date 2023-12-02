import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { search } from "../api";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";


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

const SearchButton = styled.button``;



export const SearchHandler = () => {

    const {
        register,
        handleSubmit,
      } = useForm({
        mode: "onSubmit",
      });

    const [searchBarVisible, setSearchBarVisible] = useState(false);
    const [searchTerm, setSearchTerm] =useState('')

    const handleSearchToggle = () => {
        setSearchBarVisible(!searchBarVisible);
        setSearchTerm('');
    };

    const handleInputChange = async () => {
        const { search: keyword } = data;
        const { search: type } = 'movie';
    try {
      const { results } = await search(keyword, type);
      data = setSearchTerm(results);
    } catch (error) {
      console.log(error);
    }

    }
    


    return
    
    <SearchWrap>
        <Button>
        <Link to={routes.search}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <h3>SEARCH</h3>
        </Link>
        </Button>

    </SearchWrap>
}