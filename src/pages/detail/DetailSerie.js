import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { serieDetail } from "../../api";
import { Loading } from "../../components/Loading";
import { IMG_URL } from "../../constants";
import { scrollTop } from "../../lib/scrollTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
  width: 60%;
  margin: 100px 20% 0px 20%;
  padding: 0 55px;
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
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / contain;
`;

const InfoWrap = styled.div`
  width: 100%;
  height: 100%;
  font-size: 16px;
  border-bottom: 1px solid white;
`;

const TitleWrap = styled.div`
  width: 100%;
  line-height: 30px;
  height: 25%;
  display: flex;
  justify-content: space-between;
`;

const SerieTitle = styled.h3`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
`;

const Rating = styled.h3`
  padding: 20px;
  font-size: 20px;
  font-weight: 400;
  float: right;
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
`;

const Release = styled.div`
  margin-top: 50px;
`;

const Runtime = styled.div``;

const Description = styled.p`
  max-width: 60%;
  width: 100%;
  margin-top: 50px;
  padding-top: 50px;
  opacity: 0.7;
  line-height: 1em;
  font-weight: 400;
  line-height: 2em;
  margin-bottom: 50px;
`;

const Season = styled.div`
  font-size: 20px;
`;
const NumberOfEpisodes = styled.div`
  font-size: 20px;
`;
// const Title = styled.div``;
// const Still = styled.div``;
// const EpisodeList = styled.div``;

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
              <Season>{detailData.number_of_seasons} Seasons</Season>
              <NumberOfEpisodes>
                {detailData.number_of_episodes} Episodes
              </NumberOfEpisodes>
            </TitleWrap>

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
