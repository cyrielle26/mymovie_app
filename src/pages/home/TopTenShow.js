import styled from "styled-components";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Container = styled.section`
  margin-bottom: 80px;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and (max-width: 450px) {
    font-size: 24px;
    margin-bottom: 30px;
    font-size: 24px;
  }
`;

const NumListWrap = styled.ul`
  li {
    display: flex;
  }
  h3 {
    font-size: 320px;
    line-height: 275px;
    word-break: keep-all;
    letter-spacing: -64px;
    overflow: hidden;
    @media screen and (max-width: 1024px) {
      font-size: 280px;
      line-height: 239px;
      letter-spacing: -45px;
    }
    @media screen and (max-width: 450px) {
      font-size: 200px;
      line-height: 200px;
      letter-spacing: -25px;
    }
  }
`;

const CoverBg = styled.div`
  width: 185px;
  height: 275px;
  background: url(${IMG_URL}/w185/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 5px;
  margin-bottom: 15px;
  @media screen and (max-width: 1024px) {
    height: 239px;
    width: 154px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 450px) {
    height: 200px;
    width: 145px;
    margin-bottom: 15px;
  }
`;

const params = {
  slidesPerView: 5.5,
  spaceBetween: 5,
  breakpoints: {
    // when window width is >=  1024px
    1024: {
      slidesPerView: 3.8,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3.2,
      spaceBetween: 15
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 2.2,
      spaceBetween: 10
    }
  }
};

export const TopTenShow = ({ movieData, titleName, type }) => {
  return (
    <Container>
      <Title>{titleName}</Title>
      <Swiper {...params}>
        {movieData.slice(0, 10).map((data, index) => (
          <SwiperSlide key={data.id}>
            <Link to={`/${type}/${data.id}`}>
              <NumListWrap>
                <li>
                  <h3>{index + 1}</h3>
                  <CoverBg $bgUrl={data.poster_path} />
                  {/* <MovieTitle>{data.title}</MovieTitle> */}
                </li>
              </NumListWrap>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
