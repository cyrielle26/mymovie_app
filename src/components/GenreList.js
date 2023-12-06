import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { genreList } from "../api";
import { discover } from "../api";
import { Link } from "react-router-dom";
import { IMG_URL } from "../constants";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 200px 5%;
  width: 100%;
  @media screen and (max-width: 320px) and (min-width: 300px) {
    padding: 150px 25px;
  }
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 55px;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
  @media screen and (max-width: 320px) and (min-width: 300px) {
    font-weight: 900;
    padding-right: 25px;
    letter-spacing: 1px;
    line-height: 20px;
    margin-bottom: 30px;
  }
`;

const Button = styled.button`
  all: unset;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  line-height: 14px;
  border-radius: 15px;
  background-color: ${(props) =>
    props.isActive ? "rgba(249, 249, 249, 0.5)" : "#040714"};
  opacity: 0.8;
  border: 1px solid #f9f9f9;
  padding: 5px;

  @media screen and (max-width: 480px) {
    border-radius: 18px;
    padding: 10px;
  }

  @media screen and (max-width: 320px) and (min-width: 300px) {
    border-radius: 25px;
  }
`;

const SubTitle = styled.h3`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 500;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
  @media screen and (max-width: 320px) and (min-width: 300px) {
    font-size: 18px;
    font-weight: 800;
    margin-right: 25px;
    margin-top: 15px;
  }
`;
const GenreWrap = styled.ul`
  margin-top: 45px;
  margin-bottom: 40px;
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  @media screen and (max-width: 1200px) {
    width: 75%;
    justify-content: flex-start;
  }

  @media screen and (max-width: 900px) {
    width: 90%;
    margin-top: 30px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    gap: 10px;
    margin-top: 38px;
  }

  @media screen and (max-width: 320px) and (min-width: 300px) {
    gap: 15px;
    margin-top: 20px;
  }
`;

const PosterWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;
`;

const MoviePoster = styled.div`
  height: 250px;
  width: 185px;
  border-radius: 5px;
  box-shadow: 10px 10px 10px black;
  background: #f9f9f9;
  /* background: url(${IMG_URL}/w185/${(props) =>
    props.$moviebgUrl}) no-repeat */
  /* center / cover; */
`;

const SeriePoster = styled.div`
  height: 250px;
  width: 185px;
  border-radius: 5px;
  box-shadow: 10px 10px 10px black;
  background: #f9f9f9;
  background: url(${IMG_URL}/w185/${(props) => props.$tvbgUrl}) no-repeat center /
    cover;
`;

//*************************************************************************************************************************************************************

export const GenreList = ({
  titleName,
  subtitleName,
  showMovieGenreList,
  showSerieGenreList
}) => {
  //useState declarations

  const [moviegenresData, setMovieGenresData] = useState([]); //store the fetched Movie genre data
  const [seriegenresData, setSerieGenresData] = useState([]); //store the fetched TV genre data

  const [nonActiveGenreId, setNonActiveGenreId] = useState([]); //used to store the non-selected genre values
  const [activeGenreId, setActiveGenreId] = useState([]); //used to store the selected genre values

  const [activeButton, setActiveButton] = useState("");

  const [movieData, setMovieData] = useState();
  const [tvData, setTvData] = useState();

  //Get data from the  the api request {genrelist} type: "movie" / "tv"
  useEffect(() => {
    const fetchGenresData = async () => {
      try {
        const getMovieGenreData = await genreList("movie");
        setMovieGenresData(getMovieGenreData.genres);
        const getSerieGenreData = await genreList("tv");
        setSerieGenresData(getSerieGenreData.genres);
      } catch (error) {
        console.error("Error fetching  genres data:", error);
      }
    };
    fetchGenresData();
  }, []);

  //onClickHandler change get Id
  const handleButtonClick = (genreId) => {
    console.log("Clicked genre id:", genreId);
    setActiveGenreId(genreId);
  };

  //on click event make the button change color when being clicked on
  const onClickColorHandler = () => {
    setActiveButton(!activeButton);
  };

  // fetchPoster
  // useEffect(() => {
  //   const fetchPoster = async (genreId) => {
  //     try {
  //       //***********************************************************************
  //       const { results: discoverMovie } = await discover("movie");
  //       setMovieData(discoverMovie);

  //       //***********************************************************************
  //       const { results: discoverSerie } = await discover("tv");
  //       setTvData(discoverSerie);

  //       //***********************************************************************
  //     } catch (error) {
  //       console.error("Error fetching discover data:", error);
  //     }
  //   };

  //   fetchPoster();
  // }, [activeGenreId]);

  return (
    <Container>
      <Title>{titleName}</Title>
      <SubTitle>{subtitleName}</SubTitle>
      <GenreWrap>
        {showMovieGenreList &&
          moviegenresData.map((genre) => (
            <Button
              key={genre.id}
              isActive={activeGenreId === genre.id ? "true" : undefined} // Check if the genre ID is active + activate the prop style
              onClick={() => {
                handleButtonClick(genre.id);
                onClickColorHandler();
              }}>
              {genre.name}
            </Button>
          ))}

        {/* ************************************************************************************************************************************************** */}
        {showSerieGenreList &&
          seriegenresData.map((genre) => (
            <Button
              key={genre.id}
              isActive={activeGenreId === genre.id ? "true" : undefined}
              onClick={() => {
                handleButtonClick(genre.id);
                onClickColorHandler();
              }}>
              {genre.name}
            </Button>
          ))}
      </GenreWrap>
      {/* ********************************************************************************************************************************************************** */}
      {/* ********************************************************************************************************************************************************** */}
      {/* {discoverMovie.map((movie, index) => (
        <PosterWrap key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <MoviePoster $moviebgUrl={movie.poster_path} />
          </Link>
        </PosterWrap>
      ))} */}

      {/* ********************************************************************************************************************************************************** */}
      {/* {discoverSerie.map((tv, index) => (
        <PosterWrap key={tv.id}>
          <Link to={`/tv/${tv.id}`}>
            <SeriePoster $tvbgUrl={tv.poster_path} />
          </Link>
        </PosterWrap>
      ))} */}
    </Container>
  );
};
