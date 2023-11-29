import styled from "styled-components";
import { IMG_URL } from "../constants";




const SMainBanner = styled.div`
background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat center / cover;
height: 80vh;
background-position: center;
background-repeat: no-repeat;
position: relative;
padding: 400px 5%;

h3, p {
    position:relative;
    max-width: 650px;
    width: 100%;
}
h3{
font-size: 70px;
font-weight:700;
margin-bottom:30px;
letter-spacing: -3px;
line-height: 100px;
}
p{
font-weight:400;
margin-bottom:26px;
opacity: 0.8;
}
;

@media screen and (max-width:450px) {
    h3{
        font-size: 50px;
        line-height: 65px;
    }
p{
    font-size: 16px;
}
  }`;

const BlackBg = styled.div`
width:100%;
height: 100%;
position: absolute;
top:0;
left: 0;
background: linear-gradient(
    0deg,
    rgba(4, 7, 20, 1) 0%,
    rgba(0, 0, 0, 0.8) 55%,
    rgba(0, 0, 0, 0) 95%
  );
  
`;




export const MainBanner = ({data, showTitleBlock}) => {


return<SMainBanner  $bgUrl={data.backdrop_path}>
                    
    <BlackBg />
    {showTitleBlock && <>
    <h3>{data.title}</h3>
    <p>
    {data.overview.slice(0,100) +"..."}
    </p>  
    </>}

        </SMainBanner>
}