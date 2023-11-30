import styled from "styled-components";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Container = styled.section`
margin-bottom: 80px;

`;


const Title = styled.h3`
font-size:28px;
font-weight: 700;
margin-bottom: 50px;
@media screen and (max-width: 450px) {
    font-size:24px;
    margin-bottom: 30px;
}
`;

const CoverBg = styled.div`
height: 216px;
background: url(${IMG_URL}/w342/${(props)=> props.$bgUrl}) no-repeat center / cover;
border-radius: 5px;
margin-bottom: 15px;
@media screen and (max-width: 450px) {
    height: 150px;
    margin-bottom: 15px;
}
`;
const MovieTitle = styled.h3`
margin-left: 15px;
margin-top: 10px;
max-width: 300px;
font-size: 16px;
@media screen and (max-width: 450px) {
    font-size:14px;
    line-height: 22px;
}`;


const params = {
    slidesPerView: 5.5,
    spaceBetween : 20,
    breakpoints: {
        // when window width is >=  1024px
        1024: {
            slidesPerView: 5.5,
            spaceBetween: 20
        },
         // when window width is >= 640px
         640: {
            slidesPerView: 4.3,
            spaceBetween: 15
        },
        // when window width is >= 320px
        320: {
            slidesPerView: 3.2,
            spaceBetween: 10
          },
       
    }
}

export const ShowMovies = ({ movieData, titleName,type }) => {
    return (
        <Container>
        <Title>{titleName}</Title>
        <Swiper  {...params} >
            {movieData.map((data) => (
                <SwiperSlide key={data.id}>
                    <Link to={`/${type}/${data.id}`}>
                        <CoverBg $bgUrl={data.poster_path} />
                        <MovieTitle>{data.title}</MovieTitle>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>             
</Container>
    )
}