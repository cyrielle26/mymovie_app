import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { genreMovieList } from "../api";

const Container = styled.div``;
const Title = styled.h3``;
const GenreWrap = styled.div``;
const SubTitle = styled.h3``;

const Button = styled.button`
  all: unset;
  border-radius: 15px;
  cursor: pointer;
  font-size: 20px;
  opacity: 55%;
  border: solid 2px #f9f9f9;
  height: 40px;
  line-height: 40px;
  background-color: ${(props) => props.bgColor};
`;

export const MovieSerieLayout = ({ titleName, subtitleName }) => {
    const [genresData, setGenresData] = useState([]);
    const [onClickButton, setOnclickButton] = useState('#040714');

  useEffect(() => {
      const fetchData = async () => {
    
      try {
        const response = await (genreMovieList);
        setGenresData(data.genres);
      } catch (error) {
        console.error("Error fetching genres data:", error);
      }
    };
      console.log(fetchData);
    fetchData();
  }, []);

  const onClickButtonHandler = (index) => {
    const onclickChange =  onClickButton === "#040714" ? "#95969A" : "#040714"; 
    setOnclickButton(onclickChange); 
      
    console.log(`Button clicked for genre: ${genresData[index].name}`);
  };

  return (
    <Container>
      <Title>{titleName}</Title>

      <GenreWrap>
        <SubTitle>{subtitleName}</SubTitle>
        {genresData.map((genre, index) => (
          <Button
            key={genre.id}
            bgColor="#040714"
            onClick={() => onClickButtonHandler(index)}
          >
            {genre.name}
          </Button>
        ))}
      </GenreWrap>
    </Container>
  );
};
