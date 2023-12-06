import styled from "styled-components";
import { IMG_URL } from "../../constants";

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media screen and (max-width: 900px) {
    padding: 8%;
  }

  @media screen and (max-width: 768px) {
    margin: 50px auto;
    padding: 7%;
  }

  @media screen and (max-width: 580px) {
    margin: 150px auto;
    padding: 0;
  }

  @media screen and (max-width: 480px) and (min-width: 300px) {
  }
`;
const MidCon = styled.div`
  padding-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const Bottomcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding-top: 20px;
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
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / contain;

  @media screen and (max-width: 900px) {
    background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
      center / cover;
    height: 100%;
  }
`;

const InfoWrap = styled.div`
  padding: 5%;
  width: 100%;
  height: 100%;
  font-size: 16px;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 1024px) {
    padding: 5%;
  }

  @media screen and (max-width: 900px) {
    font-size: 14px;
    padding: 0;
  }

  @media screen and (max-width: 480px) {
  }
`;

const Rating = styled.h3`
  font-size: 20px;
  font-weight: 400;
  float: right;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 0;
  }
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 900;

  @media screen and (max-width: 1200px) {
    font-size: 28px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  max-width: 60%;
  width: 100%;
  opacity: 0.7;
  line-height: 1em;
  font-weight: 400;
  line-height: 2em;

  padding: 20px;

  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 900px) {
    max-width: 50%;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 0px;
  }
`;

export {
  Container,
  InfoWrap,
  BgWrap,
  Bg,
  Title,
  Rating,
  MidCon,
  Bottomcon,
  Description
};
