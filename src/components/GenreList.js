import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { genreList } from "../api";
import { discover } from "../api";
import { Link, useParams } from "react-router-dom";
import { IMG_URL } from "../constants";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 135px 55px;
  width: 100%;
  height: 80vh;
  @media screen and (max-width: 320px) and (min-width: 300px) {
    padding: 130px 25px;
  }
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 55px;
  @media screen and (max-width: 480px) {
    font-size: 20px;
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
    props.isactive ? "rgba(249, 249, 249, 0.5)" : "#040714"};
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
  background: url(${IMG_URL}/w185/${(props) => props.$moviebgUrl}) no-repeat
    center / cover;
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

export const GenreList = ({
  titleName,
  subtitleName,
  showMovieGenreList,
  showSerieGenreList
}) => {
  const [moviegenresData, setMovieGenresData] = useState([]);
  const [seriegenresData, setSerieGenresData] = useState([]);
  const [activeGenreId, setActiveGenreId] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const [movieData, setMovieData] = useState();
  const [tvData, setTvData] = useState();
  const [discovergenreId, setDiscovergenreId] = useState([]);

  //Get data from the  the {genreList} type Movie api request
  useEffect(() => {
    const fetchMovieGenresData = async () => {
      try {
        const getMovieGenreData = await genreList("movie");
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
      try {
        const getSerieGenreData = await genreList("tv");
        setSerieGenresData(getSerieGenreData.genres);
      } catch (error) {
        console.error("Error fetching serie genres data:", error);
      }
    };
    fetchSerieGenresData();
  }, []);

  // on click event get the specific genreId when clicking on the button (tv)
  const onClickGetTvGenreHandler = async (genre) => {
    try {
      setActiveGenreId(genre);
      const results = await genreList("tv");
      const getActiveGenre = results.genre;
      setTvData(getActiveGenre);
      console.log(getActiveGenre);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // on click event get the specific genreId when clicking on the button (movie)

  const onClickGetMovieGenreHandler = async (genre) => {
    try {
      setActiveGenreId(genre);
      const response = await genreList("movie");
      const results = response.results || [];
      setMovieData(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //on click event make the button change color when being clicked on
  const onClickColorHandler = () => {
    setActiveButton(!activeButton);
  };

  //get movieDataPoster

  useEffect(() => {
    const fetchMoviePoster = async () => {
      try {
        const { results } = await discover("movie");
        setMovieData(results);
        const getDiscoverGenreId =
          results.length > 0 ? results[0].genre_ids : [];
        setDiscovergenreId(getDiscoverGenreId);

        console.log(movieData);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    if (activeGenreId) {
      fetchMoviePoster();
    }
  }, []);

  // get tv poster

  useEffect(() => {
    const fetchTVPoster = async () => {
      try {
        const { results } = await discover("tv");
        setTvData(results);
        const getDiscoverGenreId =
          results.length > 0 ? results[0].genre_ids : [];
        setDiscovergenreId(getDiscoverGenreId);
      } catch (error) {
        console.error("Error fetching tv data:", error);
      }
    };

    if (activeGenreId) {
      fetchTVPoster();
    }
  }, []);

  return (
    <Container>
      <Title>{titleName}</Title>
      <SubTitle>{subtitleName}</SubTitle>
      <GenreWrap>
        {showMovieGenreList &&
          moviegenresData.map((genre) => (
            <Button
              key={genre.id}
              to={`genre/movie?query=${genre.id}&language=en-US`} // Replace with the actual path you want the Link to navigate to
              isactive={activeGenreId === genre.id ? "true" : undefined} // Check if the genre ID is active + activate the prop style
              onClick={() => {
                onClickGetMovieGenreHandler(genre.id);
                onClickColorHandler();
              }}>
              {genre.name}
            </Button>
          ))}

        {showSerieGenreList &&
          seriegenresData.map((genre) => (
            <Button
              key={genre.id}
              to={`genre/tv?query=${genre.id}&language=en-US`} // Replace with the actual path you want the Link to navigate to
              isactive={activeGenreId === genre.id ? "true" : undefined} // Check if the genre ID is active + activate the prop style
              onClick={() => {
                onClickGetTvGenreHandler(genre.id);
                onClickColorHandler();
              }}>
              {genre.name}
            </Button>
          ))}
      </GenreWrap>

      {movieData &&
        movieData.map((movie) => (
          <PosterWrap key={movie.id}>
            <Link to={``}>
              <MoviePoster $moviebgUrl={movie.poster_path} />
            </Link>
          </PosterWrap>
        ))}

      {tvData &&
        tvData.map((tv) => (
          <PosterWrap key={tv.id}>
            <Link to={``}>
              <SeriePoster $tvbgUrl={tv.poster_path} />
            </Link>
          </PosterWrap>
        ))}
    </Container>
  );
};
