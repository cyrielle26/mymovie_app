import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { serieDetail } from "../../api";
import { Loading } from "../../components/Loading";
import { ScrollTop } from "../../lib/ScrollTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  Container,
  InfoWrap,
  BgWrap,
  Bg,
  Title,
  Rating,
  MidCon,
  Bottomcon,
  Description
} from "./DetailLayout";

const SerieInfoWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 60%;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    justify-content: center;
    @media screen and (max-width: 900px) {
      margin-top: 15px;
    }
  }
`;

const TopCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 20px;
  }
`;

const Release = styled.div`
  @media screen and (max-width: 900px) {
  }
`;

const Season = styled.div`
  line-height: 24px;
  font-size: 20px;
  @media screen and (max-width: 1200px) {
    font-size: 16px;
    margin: 0;
  }
`;
const NumberOfEpisodes = styled.div`
  line-height: 24px;
  font-size: 20px;
  margin-left: 15px;
  @media screen and (max-width: 1200px) {
    font-size: 16px;
    margin: 0;
  }
`;

const Genre = styled.ul`
  font-size: 20px;
  li {
    list-style: disc;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 900px) {
    font-size: 14px;
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
            <MidCon>
              <Release>
                {detailData.first_air_date} / {detailData.last_air_date}
              </Release>
              <Rating>
                Rated: {Math.round(detailData.vote_average)}{" "}
                <FontAwesomeIcon icon={faStar} style={{ color: "#e6c628" }} />
              </Rating>
            </MidCon>
            <Bottomcon>
              <Description>{detailData.overview}</Description>
              <Genre>
                {detailData.genres &&
                  detailData.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
              </Genre>
            </Bottomcon>
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
