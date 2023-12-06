import styled from '@emotion/styled';
import { useState, useEffect} from "react";
import { genreList } from "../api";
import { discover } from '../api';
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

const PosterWrap= styled.div`
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
  background: url(${IMG_URL}/w185/${(props) => props.$moviebgUrl}) no-repeat center / cover;
`;

const SeriePoster = styled.div`
  height: 250px;
  width: 185px;
  border-radius: 5px;
  box-shadow: 10px 10px 10px black;
  background: #f9f9f9;
  background: url(${IMG_URL}/w185/${(props) => props.$tvbgUrl}) no-repeat center / cover;
`;

export const GenreList = ({ titleName, subtitleName, showMovieGenreList, showSerieGenreList }) => {
  
  const [moviegenresData, setMovieGenresData] = useState([]);
  const [seriegenresData, setSerieGenresData] = useState([]);
  const [activeGenreId, setActiveGenreId] = useState(false);
  const [activeButton, setActiveButton] = useState('');
  const [movieData, setMovieData] = useState();
  const [tvData, setTvData] = useState();
  let { type } = useParams();
  // const tvType = useRef(type = 'tv');
  // const movieType = useRef(type = 'movie');

  //Get data from the  the {genreList} type Movie api request
  useEffect(() => {
    const fetchMovieGenresData = async () => {
      
      try {
        const getMovieGenreData = await genreList('movie');
        setMovieGenresData(getMovieGenreData.genres);
        console.log(getMovieGenreData); 
        
      } catch (error) {
        console.error("Error fetching movie genres data:", error);
      }
    };
    fetchMovieGenresData();
  }, []);

    //Get data from the  the {genreList} type Tv api request
    useEffect(() => {
      const fetchSerieGenresData = async () => {
      
        try {

          const getSerieGenreData = await genreList('tv');
          setSerieGenresData(getSerieGenreData.genres);
          console.log(getSerieGenreData); 
          
        } catch (error) {
          console.error("Error fetching serie genres data:", error);
        }
      };
      fetchSerieGenresData();
    }, []);
  

  // on click event get the specific genreId when clicking on the button
  const onClickGetGenreHandler = async (genre) => {
    try {
      setActiveGenreId(genre);
      const response = await genreList(type); // Updated to pass genre type
      const results = response.results || [];

      if (type === 'movie') {
        setMovieData(results);
        setTvData([]);
      } else {
        setTvData(results);
        setMovieData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  //on click event make the button change color when being clicked on
  const onClickColorHandler = () => {
    setActiveButton(!activeButton);
  }


  //get movieDataPoster
  
  useEffect(() => {
    const fetchMoviePoster = async () => {
      try {
        const { results } = await discover('movie');
        setMovieData(results);
        console.log(results);
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
      try {
        const { results } = await discover('tv');
        setTvData(results);
        console.log(results);
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
            to={`genre/movie?query=${genre.id}&language=en-US`} // Replace with the actual path you want the Link to navigate to
            isactive={activeGenreId === genre.id ? "true" : undefined} // Check if the genre ID is active + activate the prop style
            onClick={() => {
              onClickGetGenreHandler(genre.id);
              onClickColorHandler(); 
            }}
          >
            {genre.name}
          </Button>
        ))}

        {showSerieGenreList && seriegenresData.map((genre) => (
          <Button
            key={genre.id}
            to={`genre/tv?query=${genre.id}&language=en-US`} // Replace with the actual path you want the Link to navigate to
            isactive={activeGenreId === genre.id ? "true" : undefined} // Check if the genre ID is active + activate the prop style
            onClick={() => {
              onClickGetGenreHandler(genre.id);
              onClickColorHandler();
            }}
          >
            {genre.name}
          </Button>
        ))}
      </GenreWrap>

      {movieData && movieData.map((movie) => (
   <PosterWrap key={movie.id}>
      <Link to={``}>
         <MoviePoster $moviebgUrl={movie.poster_path} />
      </Link>
   </PosterWrap>
))}

{tvData && tvData.map((tv) => (
   <PosterWrap key={tv.id}>
      <Link to={``}>
         <SeriePoster $tvbgUrl={tv.poster_path} />
      </Link>
   </PosterWrap>
))}

      
    


    </Container>
  );
};
 