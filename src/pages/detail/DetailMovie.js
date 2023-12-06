import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import { Loading } from "../../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { ScrollTop } from "../../lib/ScrollTop";
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

const TopCon = styled.div`
  width: 100%;
  margin-top: 30px;
  width: 100%;
  line-height: 30px;
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
    margin-top: 20px;
  }
`;

const Genre = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-size: 16px;
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
  @media screen and (max-width: 768px) {
  }
`;

const Release = styled.div`
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Runtime = styled.div`
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
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
              <Runtime>{detailData.runtime}min</Runtime>
            </TopCon>
            <MidCon>
              <Release>{detailData.release_date}</Release>
              <Rating>
                Rated: {Math.round(detailData.vote_average)}{" "}
                <FontAwesomeIcon icon={faStar} style={{ color: "#e6c628" }} />
              </Rating>

              {/* <Keywords>This movie is: {detailData.keyword.map((keyword) => <li key={keyword.id}>{keywords.name}</li>)}</Keywords>  */}
            </MidCon>
            <Bottomcon>
              <Description>{detailData.overview}</Description>
              <Genre>
                {" "}
                {detailData.genres.map((genres) => (
                  <li key={genres.id}>{genres.name}</li>
                ))}
              </Genre>
            </Bottomcon>
          </InfoWrap>
        </Container>
      )}
    </>
  );
};
