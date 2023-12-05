import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import { Loading } from "../../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { ScrollTop } from "../../lib/ScrollTop";
import { Container, InfoWrap, BgWrap, Bg, Title, Rating } from "./DetailLayout";

const TopCon = styled.div`
  margin-top: 40px;
  width: 100%;
  line-height: 30px;
  height: 25%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    margin-top: 10px;
    line-height: 24px;
    height: 10%;
  }

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 900px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    margin-top: 10px;
    line-height: 15px;
  }
`;

const Genre = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  font-size: 16px;
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
  @media screen and (max-width: 768px) {
    padding: 0;
    margin-bottom: 150px;
  }
`;

const Release = styled.div`
  font-size: 20px;
  margin-top: 50px;

  @media screen and (max-width: 900px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Runtime = styled.div`
  line-height: 24px;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
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
    margin-top: 0px;
    max-width: 80%;
  }
  @media screen and (max-width: 900px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

// const Keywords = styled.div``;

export const DetailMovie = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  ScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
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
              <Title>{detailData.title}</Title>
              <Runtime>Runtime:{detailData.runtime}min</Runtime>
            </TopCon>
            <Rating>
              Rated: {Math.round(detailData.vote_average)}{" "}
              <FontAwesomeIcon icon={faStar} style={{ color: "#e6c628" }} />
            </Rating>

            {/* <Keywords>This movie is: {detailData.keyword.map((keyword) => <li key={keyword.id}>{keywords.name}</li>)}</Keywords>  */}
            <Release>{detailData.release_date}</Release>
            <Genre>
              {" "}
              {detailData.genres.map((genres) => (
                <li key={genres.id}>{genres.name}</li>
              ))}
            </Genre>
            <Description>{detailData.overview}</Description>
          </InfoWrap>
        </Container>
      )}
    </>
  );
};
