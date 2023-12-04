import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { serieDetail } from "../../api";
import { Loading } from "../../components/Loading";
import { IMG_URL } from "../../constants";
import { ScrollTop } from "../../lib/ScrollTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
  position: relative;
  width: 60%;
  margin: 100px 20% 0px 20%;
  padding: 0 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    width: 70%;
    margin: 85px 16% 0px 16%;
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 70px 5% 0 5%;
    padding: 0 45px;
  }

  @media screen and (max-width: 480px) and (min-width: 300px) {
    width: 100%;
    margin: 0;
  }
`;
const BgWrap = styled.div`
  width: 100%;
  height: 600px;
  @media screen and (max-width: 1200px) {
    height: 500px;
  }

  @media screen and (max-width: 1024px) {
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    height: 350px;
    width: 100%;
  }
`;

const Bg = styled.div`
  border-radius: 5px 5px 0px 0px;
  width: 100%;
  height: 100%;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / contain;

  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;

const InfoWrap = styled.div`
  width: 100%;
  height: 100%;
  font-size: 16px;
  @media screen and (max-width: 1200px) {
    max-height: 70%;
  }

  @media screen and (max-width: 900px) {
    max-height: 60%;
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    max-height: 50%;
  }
`;

const SerieInfoWrap = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const SerieTitle = styled.h3`
  width: 40%;
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const TopCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Rating = styled.h3`
  padding: 20px;
  font-size: 20px;
  font-weight: 400;
  float: right;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
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

const Release = styled.div`
  margin-top: 50px;

  @media screen and (max-width: 900px) {
    margin-top: 20px;
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
  @media screen and (max-width: 900px) {
    margin-top: 20px;
  }
`;

const Season = styled.div`
  margin: 45px;
  line-height: 24px;
  font-size: 20px;
`;
const NumberOfEpisodes = styled.div`
  margin: 45px;
  line-height: 24px;
  font-size: 20px;
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
              <SerieTitle>{detailData.name}</SerieTitle>
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
