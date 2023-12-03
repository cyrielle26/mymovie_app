import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import { Loading } from "../../components/Loading";
import { IMG_URL } from "../../constants";
import { scrollTop } from "../../lib/scrollTop";

const Container = styled.div`
  padding: 100px 150px 100px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 815px) {
    padding: 100px;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding: 100px 5%;
  }
`;

const Bg = styled.div`
  width: 40%;
  height: 700px;
  background-color: lightgray;
  background: url(${IMG_URL}/w1280/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  @media screen and (max-width: 950px) {
    height: 680px;
  }
  @media screen and (max-width: 815px) {
    width: 65%;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 500px;
  }
`;

const InfoWrap = styled.div`
  width: 55%;
  font-size: 20px;
  padding-top: 50px;
  @media screen and (max-width: 950px) {
    width: 60%;
    font-size: 16px;
    padding-left: 50px;
  }
  @media screen and (max-width: 815px) {
    font-size: 14px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const MovieTitle = styled.h3`
  font-size: 60px;
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

const Keywords = styled.div``;

export const DetailMovie = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  scrollTop();

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
          <Bg $bgUrl={detailData.poster_path} />

          <InfoWrap>
            <MovieTitle>{detailData.title}</MovieTitle>
            <Rating>Rated: {Math.round(detailData.vote_average)}</Rating>
            <Genre>
              {" "}
              {detailData.genres.map((genres) => (
                <li key={genres.id}>{genres.name}</li>
              ))}
            </Genre>
            {/* <Keywords>This movie is: {detailData.keyword.map((keyword) => <li key={keyword.id}>{keywords.name}</li>)}</Keywords> */}
            <Release>{detailData.release_date}</Release>
            <Runtime>Runtime: {detailData.runtime}</Runtime>

            <Description>{detailData.overview}</Description>
          </InfoWrap>
        </Container>
      )}
    </>
  );
};
