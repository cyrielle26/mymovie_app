import { useForm } from "react-hook-form";
import { search } from "../../api";
import { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IMG_URL } from "../../constants";
import { ScrollTop } from "../../lib/ScrollTop";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { movieRecommendations } from "../../api";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { SearchHandler } from "../../components/SearchHandler";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  @media screen and (max-width: 480px) {
    margin-bottom: 120px;
  }
`;

const InputWrap = styled.div`
  padding-top: 100px;

  padding-right: 5%;
  height: 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 20px;
  padding-bottom: 20px;
  z-index: 11;
`;

const Form = styled.form`
  z-index: 11;
`;

const Input = styled.input`
  all: unset;
  margin: 0.5em;
  color: ${(props) => props.$inputColor || "red"};
  background: #f9f9f9;
  font-family: "oswald";
  font-weight: 800;
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 260px;
  opacity: 0.7;
  @media screen and (max-width: 480px) and (min-width: 300px) {
    margin-bottom: 50px;
  }
  &:focus {
    opacity: 1;
    transform: scale(1);
    box-shadow: 2px 2px 2px 2px #f5f5f5;
  }
`;

const ConWrap = styled.div`
  height: 100%;
  padding: 100px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 75px;
  }

  @media screen and (max-width: 900px) {
    padding: 50px;
  }
  @media screen and (max-width: 600px) {
    column-gap: 20px;
    row-gap: 10px;
  }
  @media screen and (max-width: 480px) and (min-width: 300px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 5px;
    padding: 25px;
  }
`;

const SearchResultsTitle = styled.h3`
  padding-left: 100px;
  font-size: 20px;
  margin-bottom: 25px;
  @media screen and (max-width: 1024px) {
    padding-left: 85px;
  }
  @media screen and (max-width: 900px) {
    padding-left: 65px;
  }
  @media screen and (max-width: 600px) and (min-width: 300px) {
    padding-left: 55px;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 480px) and (min-width: 300px) {
    font-size: 16px;
  }
`;

const Con = styled.div``;

const Bg = styled.div`
  border-radius: 5px;
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  background-color: #f9f9f9;
  box-shadow: 10px 10px 10px black;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
  @media screen and (max-width: 600px) {
    height: 190px;
    border-radius: 10px;
  }
  @media screen and (max-width: 480px) and (min-width: 300px) {
    height: 200px;
    border-radius: 15px;
  }
`;

const MovieTitle = styled.div`
  margin-top: 25px;
  font-size: 18px;
  @media screen and (max-width: 600px) and (min-width: 300px) {
    font-size: 14px;
  }
`;
const Type = styled.div`
  margin-top: 25px;
  font-size: 18px;
`;

const Button = styled.button`
  all: unset;
`;

const NoResults = styled.h3`
  font-size: 20px;
  padding: 0 40%;
  word-break: keep-all;
`;

// const SuggestionContainer = styled.div``;
// const SuggestionTitle = styled.div``;
// const CoverBg = styled.div``;

// const SerieTitle = styled.div``;

// const params = {
//   slidesPerView: 5.5,
//   spaceBetween: 20,
//   breakpoints: {
//     // when window width is >=  1024px
//     1024: {
//       slidesPerView: 5.5,
//       spaceBetween: 20
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 4.3,
//       spaceBetween: 15
//     },
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 3.2,
//       spaceBetween: 10
//     }
//   }
// };

export const Search = () => {
  const { register, handleSubmit } = useForm({
    mode: "onSubmit"
  });

  const [term, setTerm] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [movieResults, setMovieResults] = useState();
  const [tvResults, setTvResults] = useState();
  const [suggestionData, setSuggestionData] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const { id, type } = useParams();

  ScrollTop();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading :" + error);
        /* console.log(isLoading); */
      }
    })();
  }, []);

  const searchHandler = async (data) => {
    const { search: keyword } = data;

    try {
      const { results: movieResults } = await search("movie", keyword);
      setMovieResults(movieResults);
      const { results: tvResults } = await search("tv", keyword);
      setTvResults(tvResults);
      setTerm(tvResults && movieResults);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <InputWrap>
          <Title>Anything in mind?</Title>
          <Form onSubmit={handleSubmit(searchHandler)}>
            <Button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
            <Input
              {...register("search", {
                required: "Please enter a search term"
              })}
              type="text"
              placeholder="Movie, show..."
              $inputColor="#040714"
            />
          </Form>
        </InputWrap>

        {isLoading ? (
          <Loading />
        ) : (
          <MainLayout>
            {term ? (
              term.length > 0 ? (
                <>
                  <SearchResultsTitle>Search Results</SearchResultsTitle>
                  <ConWrap>
                    {term.map((data) => (
                      <Con key={data.id}>
                        <Bg
                          $bgUrl={
                            data.backdrop_path
                              ? `${IMG_URL}/w500/${data.backdrop_path}`
                              : data.poster_path
                              ? `${IMG_URL}/w500/${data.poster_path}`
                              : "https://congtygiaphat104.com/template/Default/img/no.png"
                          }
                        />
                        <MovieTitle>{data.title}</MovieTitle>
                        <Type>{type}</Type>
                      </Con>
                    ))}
                  </ConWrap>
                </>
              ) : (
                <NoResults>No results found.</NoResults>
              )
            ) : (
              <p></p>
            )}
          </MainLayout>
        )}
      </Container>
    </>
  );
};
