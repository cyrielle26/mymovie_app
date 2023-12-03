import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { serieDetail } from "../../api";
import { Loading } from "../../components/Loading";
import { IMG_URL } from "../../constants";
import { scrollTop } from "../../lib/scrollTop";

const Container = styled.div`
  width: 60%;
  margin: 100px 20% 0px 20%;
  padding: 0 55px;
  background-color: red;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const BgWrap = styled.div`
  width: 100%;
  height: 600px;
`;

const Bg = styled.div`
  border-radius: 5px 5px 0px 0px;
  width: 100%;
  height: 100%;
  background-color: lightgray;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / contain;
`;

const InfoWrap = styled.div`
  width: 100%;
  font-size: 16px;
`;

const SerieTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 30px;
  @media screen and (max-width: 815px) {
    font-size: 40px;
  }
  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;

const Rating = styled.h3`
  font-weight: 400;
`;

const Genre = styled.ul`
  margin: 20px 0;
  li {
    list-style: disc;
    margin-left: 20px;
    margin-bottom: 10px;
  }
`;

const Release = styled.div`
  margin-bottom: 20px;
`;

const Runtime = styled.div``;

const Description = styled.p`
  max-width: 70%;
  width: 100%;
  margin-top: 50px;
  border-top: 1px solid white;
  padding-top: 50px;
  opacity: 0.7;
  line-height: 2em;
  font-weight: 300;
  @media screen and (max-width: 815px) {
    padding-top: 30px;
  }
  @media screen and (max-width: 450px) {
    max-width: 100%;
  }
`;

const Season = styled.div``;
const NumberOfEpisodes = styled.div``;
const Title = styled.div``;
const Still = styled.div``;
const EpisodeList = styled.div``;

export const DetailSerie = (genres) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  scrollTop();

  useEffect(() => {
    (async () => {
      try {
        const data = await serieDetail(id);
        // console.log(detailResults);
        setDetailData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error :" + error);
        /* console.log(isLoading); */
      }
    })();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <BgWrap>
            <Bg $bgUrl={detailData.backdrop_path} />
          </BgWrap>

          <InfoWrap>
            <TitleWrap>
              <SerieTitle>{detailData.name}</SerieTitle>
              <Season>Season {detailData.season_number}</Season>
            </TitleWrap>

            <NumberOfEpisodes>{detailData.number_of_episodes}</NumberOfEpisodes>
            <Rating>Rated: {Math.round(detailData.vote_average)}</Rating>
            <Genre>
              {detailData.genres &&
                detailData.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
            </Genre>
            <Release>
              from {detailData.first_air_date} to {detailData.last_air_date}
            </Release>
            <Description>{detailData.overview}</Description>
            <Title>Episodes</Title>
            <EpisodeList>
              {detailData.episodes &&
                detailData.episodes.map((episode) => (
                  <li key={episode.id}>
                    <h2>{episode.episode_number}</h2>
                    <Still>{episode.still_path}</Still>
                    <h3>{episode.name}</h3>
                    <p>{episode.overview.slice(0, 100) + "..."}</p>
                  </li>
                ))}
            </EpisodeList>
            <Runtime>Runtime: {detailData.last_episode_to_air.runtime}</Runtime>
          </InfoWrap>
        </Container>
      )}
    </>
  );
};
