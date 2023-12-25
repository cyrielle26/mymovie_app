/** @format */

import styled from "styled-components"
import { IMG_URL } from "../constants"

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	padding: 200px 5%;
	width: 100%;

	@media screen and (max-width: 320px) and (min-width: 300px) {
		padding: 150px 25px;
	}

	width: 100%;
`

export const Title = styled.h3`
	font-size: 22px;
	font-weight: 800;
	margin-bottom: 55px;
	@media screen and (max-width: 480px) {
		font-size: 16px;
	}
	@media screen and (max-width: 320px) and (min-width: 300px) {
		font-weight: 900;
		padding-right: 25px;
		letter-spacing: 1px;
		line-height: 20px;
		margin-bottom: 30px;
	}
`

export const Button = styled.button`
	all: unset;
	text-align: center;
	cursor: pointer;
	font-size: 14px;
	line-height: 14px;
	border-radius: 15px;
	background-color: ${(props) =>
		props.isactive ? "rgba(249, 249, 249, 0.5)" : "#040714"};
	opacity: 0.8;
	border: 1px solid #f9f9f9;
	padding: 5px;

	@media screen and (max-width: 480px) {
		border-radius: 18px;
		padding: 10px;
	}

	@media screen and (max-width: 320px) and (min-width: 300px) {
		border-radius: 25px;
	}
`

export const SubTitle = styled.h3`
	margin-top: 30px;
	font-size: 18px;
	font-weight: 500;
	@media screen and (max-width: 480px) {
		font-size: 18px;
	}
	@media screen and (max-width: 320px) and (min-width: 300px) {
		font-size: 18px;
		font-weight: 800;
		margin-right: 25px;
		margin-top: 15px;
	}
`
export const GenreWrap = styled.ul`
	margin-top: 45px;
	margin-bottom: 40px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 8px;
	@media screen and (max-width: 1200px) {
		width: 75%;
		justify-content: flex-start;
	}

	@media screen and (max-width: 900px) {
		width: 90%;
		margin-top: 30px;
	}
	@media screen and (max-width: 600px) {
		width: 100%;
	}

	@media screen and (max-width: 480px) {
		gap: 10px;
		margin-top: 38px;
	}

	@media screen and (max-width: 320px) and (min-width: 300px) {
		gap: 15px;
		margin-top: 20px;
	}
`
export const PosterWrap = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	column-gap: 35px;
	row-gap: 30px;
	@media screen and (max-width: 1200px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media screen and (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (max-width: 900px) {
	}
	@media screen and (max-width: 600px) {
		column-gap: 20px;
		row-gap: 10px;
	}
	@media screen and (max-width: 480px) and (min-width: 300px) {
		grid-template-columns: repeat(1, 1fr);
		column-gap: 10px;
		row-gap: 20px;
	}
`
export const MoviePoster = styled.div`
	height: 250px;
	width: 185px;
	border-radius: 5px;
	box-shadow: 10px 10px 10px black;
	background: #f9f9f9;
	background: url(${IMG_URL}/w500${(props) => props.$moviebgUrl}) no-repeat
		center / cover;
`
