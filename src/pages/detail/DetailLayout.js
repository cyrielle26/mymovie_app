import styled from "styled-components";
import { IMG_URL } from "../../constants";

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

  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 0;
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
  padding: 5%;
  width: 100%;
  height: 100%;
  font-size: 16px;
  @media screen and (max-width: 1200px) {
    max-height: 80%;
    padding-top: 0px;
  }
  @media screen and (max-width: 1024px) {
    max-height: 70%;
    padding-top: 40px;
  }

  @media screen and (max-width: 900px) {
    max-height: 60%;
    font-size: 14px;
    padding: 2%;
  }

  @media screen and (max-width: 480px) {
    max-height: 50%;
  }
`;

const Rating = styled.h3`
  padding-top: 50px;
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
  margin-bottom: 30px;
  @media screen and (max-width: 1200px) {
    font-size: 28px;
    margin-bottom: 0px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export { Container, InfoWrap, BgWrap, Bg, Title, Rating };
