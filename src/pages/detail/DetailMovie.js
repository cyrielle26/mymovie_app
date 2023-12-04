import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import { Loading } from "../../components/Loading";
import { IMG_URL } from "../../constants";
import { scrollTop } from "../../lib/scrollTop";

const Container = styled.div`
  position: relative;
  width: 60%;
  margin: 100px 20% 0px 20%;
  padding: 0 55px;
  display: flex;
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

  @media screen and (max-width: 480px) {
    width: 100%;
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
  }
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

const TitleWrap = styled.div`
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

const MovieTitle = styled.h3`
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
  @media screen and (max-width: 900px) {
    margin-top: 20px;
  }
`;
// const Keywords = styled.div``;

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
          <BgWrap>
            <Bg $bgUrl={detailData.backdrop_path} />
          </BgWrap>
          <InfoWrap>
            <TitleWrap>
              <MovieTitle>{detailData.title}</MovieTitle>
              <Rating>Rated: {Math.round(detailData.vote_average)}</Rating>
            </TitleWrap>
            <Genre>
              {" "}
              {detailData.genres.map((genres) => (
                <li key={genres.id}>{genres.name}</li>
              ))}
            </Genre>
            {/* <Keywords>This movie is: {detailData.keyword.map((keyword) => <li key={keyword.id}>{keywords.name}</li>)}</Keywords>  */}
            <Release>{detailData.release_date}</Release>
            <Runtime>Runtime:{detailData.runtime}min</Runtime>

            <Description>{detailData.overview}</Description>
          </InfoWrap>
        </Container>
      )}
    </>
  );
};
