import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { serieDetail } from "../../api";
import { Loading } from "../../components/Loading";
import { ScrollTop } from "../../lib/ScrollTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Container, InfoWrap, BgWrap, Bg, Title, Rating } from "./DetailLayout";

const SerieInfoWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 60%;

  @media screen and (max-width: 1024px) {
  }
`;

const TopCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Release = styled.div`
  margin-top: 50px;

  @media screen and (max-width: 900px) {
    margin-top: 20px;
  }
`;

const Season = styled.div`
  margin: 45px;
  line-height: 24px;
  font-size: 20px;
  @media screen and (max-width: 1200px) {
    font-size: 18px;
    margin: 0;
  }
`;
const NumberOfEpisodes = styled.div`
  margin: 45px;
  line-height: 24px;
  font-size: 20px;
  @media screen and (max-width: 1200px) {
    font-size: 18px;
    margin: 0;
    margin-left: 45px;
  }
`;

const Description = styled.p`
  max-width: 60%;
  width: 100%;
  margin-top: 50px;
  padding-top: 20px;
  opacity: 0.7;
  line-height: 1em;
  font-weight: 400;
  line-height: 2em;
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
    margin-top: 25px;
  }
  @media screen and (max-width: 900px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Genre = styled.ul`
  float: right;
  padding: 70px;
  font-size: 20px;
  li {
    list-style: disc;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 1200px) {
    padding: 50px;
    bottom: 0%;
  }

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    padding: 40px;
  }

  @media screen and (max-width: 900px) {
    font-size: 14px;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 50px;
    margin: 50px;
  }
`;

// const Title = styled.div``;
// const Still = styled.div``;
// const EpisodeList = styled.div``;

export const DetailSerie = (genres) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  ScrollTop();

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
            <TopCon>
              <Title>{detailData.name}</Title>
              <SerieInfoWrap>
                <Season>{detailData.number_of_seasons} Seasons</Season>
                <NumberOfEpisodes>
                  {detailData.number_of_episodes} Episodes
                </NumberOfEpisodes>
              </SerieInfoWrap>
            </TopCon>
            <Rating>
              Rated: {Math.round(detailData.vote_average)}{" "}
              <FontAwesomeIcon icon={faStar} style={{ color: "#e6c628" }} />
            </Rating>
            <Release>
              from {detailData.first_air_date} to {detailData.last_air_date}
            </Release>
            <Genre>
              {detailData.genres &&
                detailData.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
            </Genre>
            <Description>{detailData.overview}</Description>
            {/* <Title>Episodes</Title>
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
            <Runtime>Runtime: {detailData.last_episode_to_air.runtime}</Runtime> */}
          </InfoWrap>
        </Container>
      )}
    </>
  );
};
