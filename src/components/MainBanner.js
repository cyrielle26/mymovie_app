/** @format */

import styled from "styled-components"
import { IMG_URL } from "../constants"

const SMainBanner = styled.div`
	width: 100vw;

	background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
		center / cover;
	height: 80vh;
	background-position: center;
	background-repeat: no-repeat;
	position: relative;
	top: 0;
	left: 0;
	padding: 470px 5%;
`
const TitleWrap = styled.div`
	max-width: 75vw;
	bottom: 200px;
	position: absolute;
	@media screen and (max-width: 600px) {
		max-width: 85vw;
	}

	h3 {
		margin-top: 75px;
		font-size: 65px;
		font-weight: 700;
		margin-bottom: 30px;
		letter-spacing: -3px;
		line-height: 100px;

		@media screen and (max-width: 1024px) {
			font-size: 35px;
			line-height: 50px;
			letter-spacing: 0px;
		}

		@media screen and (max-width: 450px) and (min-width: 300px) {
			font-size: 28px;
			max-width: 320px;
			line-height: 40px;
			letter-spacing: 1;
		}
	}

	p {
		max-width: 650px;
		width: 100%;
		font-weight: 400;
		margin-bottom: 26px;
		letter-spacing: 1px;
		line-height: 25px;
		opacity: 0.7;

		@media screen and (max-width: 800px) {
			max-width: 500px;
			margin-bottom: 25px;
		}

		@media screen and (max-width: 600px) {
			max-width: 400px;
			margin-bottom: 25px;
		}

		@media screen and (max-width: 450px) and (min-width: 300px) {
			font-size: 14px;
			max-width: 320px;
		}
	}
`

const BlackBg = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.7) 75%,
		rgba(4, 7, 20, 1) 100%
	);
`

const BlurrBox = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	backdrop-filter: blur(10px);
	width: 100%;
	height: 100%;
`

export const MainBanner = ({ data, showTitleBlock, showBlurr }) => {
	return (
		<SMainBanner $bgUrl={data.backdrop_path}>
			<BlackBg />
			{showTitleBlock && (
				<TitleWrap>
					<h3>{data.title}</h3>
					<p>{data.overview.slice(0, 100) + "..."}</p>
				</TitleWrap>
			)}
			{showBlurr && <BlurrBox />}
		</SMainBanner>
	)
}
