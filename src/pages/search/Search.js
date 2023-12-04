import { useForm } from "react-hook-form";
import { search } from "../../api";
import { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { scrollTop } from "../../lib/scrollTop";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { movieRecommendations } from "../../api";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";

const Container = styled.div`
  width: 100vw;
  height: 100%;
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
  border-radius: 13px;
  padding: 5px;
  width: 260px;
  @media screen and (max-width: 480px) and (min-width: 300px) {
    margin-bottom: 50px;
  }
`;

const ConWrap = styled.div`
  height: 100%;
  padding: 100px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;

  @media screen and (max-width: 480px) and (min-width: 300px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 5px;
    padding: 55px;
  }
`;

const SearchResultsTitle = styled.h3`
  padding-left: 100px;
  font-size: 20px;
  margin-bottom: 25px;
  @media screen and (max-width: 480px) and (min-width: 300px) {
    font-size: 16px;
  }
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  background-color: #f9f9f9;
  box-shadow: 10px 10px 10px black;
  @media screen and (max-width: 480px) and (min-width: 300px) {
    height: 200px;
    border-radius: 5px;
  }
`;

const MovieTitle = styled.div`
  margin-top: 25px;
  font-size: 18px;
`;
const Type = styled.div`
  margin-top: 25px;
  font-size: 18px;
`;

const NoResults = styled.h3`
  font-size: 20px;
  padding: 0 40%;
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

  scrollTop();

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
            <Input
              {...register("search", {
                required: "Please enter a search term"
              })}
              type="text"
              placeholder="Movie, show..."
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
