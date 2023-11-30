import styled from "styled-components";
import { useState, useEffect } from "react";
import { genreMovieList } from "../api";
import { Link } from "react-router-dom";



const Container = styled.div`
position: absolute;
top:0;
left:0;
padding: 115px 55px;
width:100%;
height:80vh;
`;

const Title = styled.h3`
font-size:22px;
font-weight:800;
margin-bottom:35px;`;

const Button = styled.button`

all:unset;
cursor: pointer;
font-size: 14px;
line-height: 18px;
border-radius: 15px;
background-color: ${(props) => (props.active ?"rgba(249, 249, 249, 0.5)" :  "#040714" )}; // Set the active and inactive color 
opacity: 0.8;
border: 1px solid #f9f9f9;
padding: 5px;
`;

const SubTitle = styled.h3`
font-size: 18px;
font-weight: 500;
margin-bottom: 15px;
`;
const GenreWrap = styled.ul``;

export const GenreList = ({ genreId, titleName, subtitleName }) => {
    const [genresData, setGenresData] = useState([]);
    const [activeGenreId, setActiveGenreId] = useState(null);
    
    useEffect(() => {
        const fetchGenresData = async () => {
          try {
            const data = await genreMovieList(); 
            setGenresData(data.genres);
          } catch (error) {
            console.error("Error fetching genres data:", error);
          }
        };
    
        fetchGenresData();
    }, []);
    
      const onClickButtonHandler = (genre) => {
        setActiveGenreId(genre.id); // Set the active genre ID when the button is clicked
      };

    return (
        <Container>
        <Title>{titleName}</Title>
        <GenreWrap>
          <SubTitle>{subtitleName}</SubTitle>
          {genresData.map((genre) => (
            <Button
              key={genre.id}
              to={`/genre/${genre.id}`} // Replace with the actual path you want the Link to navigate to
              active={activeGenreId === genre.id} // Check if the genre ID is active
              onClick={() => onClickButtonHandler(genre)}
            >
              {genre.name}
            </Button>
          ))}
        </GenreWrap>
      </Container>
    )
}