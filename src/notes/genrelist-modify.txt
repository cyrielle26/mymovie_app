import styled from '@emotion/styled'
import { useState, useEffect } from "react";
import { genreList } from "../api";
import { search } from "../api";
import { Link, useParams } from 'react-router-dom';
import { IMG_URL } from "../constants";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 115px 55px;
  width: 100%;
  height: 80vh;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 35px;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  border-radius: 15px;
  background-color: ${(props) => (props.isactive ? "rgba(249, 249, 249, 0.5)" : "#040714")};
  opacity: 0.8;
  border: 1px solid #f9f9f9;
  padding: 5px;
`;

const SubTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
`;
const GenreWrap = styled.ul`
  margin-bottom: 40px;
`;

const MoviePosterWrap= styled.div`
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
`;

export const GenreList = ({ titleName, subtitleName, showMovieGenreList, showSerieGenreList }) => {
  
  const [moviegenresData, setMovieGenresData] = useState([]);
  const [seriegenresData, setSerieGenresData] = useState([]);
  const [activeGenreId, setActiveGenreId] = useState(false);
  const [activeButton, setActiveButton] = useState('');
  const [movieData, setMovieData] = useState([]);
  const {type} = useParams;

  //Get data from the  the {genreList} type Movie api request
  useEffect(() => {
    const fetchMovieGenresData = async () => {
      type = "movie";
      try {
        const getMovieGenreData = await genreList('Tv');
        setMovieGenresData(getMovieGenreData.genres);
        
      } catch (error) {
        console.error("Error fetching movie genres data:", error);
      }
    };
    fetchMovieGenresData();
  }, []);

    //Get data from the  the {genreList} type Tv api request
    useEffect(() => {
      const fetchSerieGenresData = async () => {
        type = "Tv";
        try {
          const getSerieGenreData = await genreList('movie');
          setSerieGenresData(getSerieGenreData.genres);
          
        } catch (error) {
          console.error("Error fetching serie genres data:", error);
        }
      };
      fetchSerieGenresData();
    }, []);
  


//on click event get the specific genreId when clicking on the button
  const onClickGetGenreHandler = async (genre) => {
    try {
  
      setActiveGenreId(genre.id);

    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
    console.log(activeGenreId);
  };

  //on click event make the button change color when being clicked on
  const onClickColorHandler = () => {
    setActiveButton(!activeButton);
  }


  //get movieDataPoster
  
  useEffect(() => {
    const fetchMoviePoster = async () => {
      try {
        const { results } = await search("movie", activeGenreId);
        setMovieData(results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    if (activeGenreId) {
      fetchMoviePoster();
    }
  }, [activeGenreId]);


  // get tv poster


  useEffect(() => {
    const fetchTVPoster = async () => {
      search("Tv");
      try {
        const { results } = await search(activeGenreId);
        setMovieData(results);
      } catch (error) {
        console.error("Error fetching tv data:", error);
      }
    };

    if (activeGenreId) {
      fetchTVPoster();
    }
  }, [activeGenreId]);
  

  return (
    <Container>
      <Title>{titleName}</Title>
      <GenreWrap>
        <SubTitle>{subtitleName}</SubTitle>
        {showMovieGenreList && moviegenresData.map((genre) => (
          <Button
            key={genre.id}
            to={`search/Movie?query=${genre.id}&language=en-US`} // Replace with the actual path you want the Link to navigate to
            isactive={activeGenreId === genre.id ? "true" : undefined} // Check if the genre ID is active + activate the prop style
            onClick={() => {
              onClickGetGenreHandler(genre);
              onClickColorHandler(); 
            }}
          >
            {genre.name}
          </Button>
        ))}
        {showSerieGenreList && seriegenresData.map((genre) => (
          <Button
            key={genre.id}
            to={`search/Tv?query=${genre.id}&language=en-US`} // Replace with the actual path you want the Link to navigate to
            isactive={activeGenreId === genre.id ? "true" : undefined} // Check if the genre ID is active + activate the prop style
            onClick={() => {
              onClickGetGenreHandler(genre);
              onClickColorHandler();
            }}
          >
            {genre.name}
          </Button>
        ))}
      </GenreWrap>

       {movieData.map((movie) => (
  <Link key={movie.id} to={`/movie/${movie.id}`}>
    <MoviePoster
      style={{ backgroundImage: `url(${IMG_URL}${movie.poster_path})` }}
    />
  </Link>
))} 

      
    


    </Container>
  );
};
 