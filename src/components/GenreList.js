/** @format */

import { genreList } from "../api"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { discover } from "../api"
import { IMG_URL } from "../constants"

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	padding: 200px 5%;
	width: 100%;
	@media screen and (max-width: 320px) and (min-width: 300px) {
		padding: 150px 25px;
	}
`

const Title = styled.h3`
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

const Button = styled.button`
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

const SubTitle = styled.h3`
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
const GenreWrap = styled.ul`
	margin-top: 45px;
	margin-bottom: 40px;
	width: 85%;
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
const PosterWrap = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	column-gap: 30px;
	row-gap: 50px;
`

const MoviePoster = styled.div`
	height: 250px;
	width: 185px;
	border-radius: 5px;
	box-shadow: 10px 10px 10px black;
	background: #f9f9f9;
	/* background: url(${IMG_URL}/w185/${(props) =>
		props.$moviebgUrl}) no-repeat */
	/* center / cover; */
`

export const GenreList = ({ titleName, subtitleName, type, id }) => {
	//useState declarations

	const [genresData, setGenresData] = useState([])
	const [activeButton, setActiveButton] = useState(null)
	const [discoverData, setDiscoverData] = useState([])

	useEffect(() => {
		const fetchGenresData = async () => {
			try {
				const getGenreData = await genreList(type)
				setGenresData(getGenreData.genres)
			} catch (error) {
				console.error("Error fetching genres data:", error)
			}
		}
		fetchGenresData()
	}, [])
	// console.log(genresData)

	useEffect(() => {
		const fetchPosterData = async () => {
			try {
				let id = setActiveButton
				const { results: discoverResults } = await discover(
					"movie",
					activeButton
				)
				setDiscoverData(discoverResults)
			} catch (error) {
				console.error("Error fetching discoverData", error)
			}
		}
		if (activeButton !== null) {
			fetchPosterData()
		}
	}, [])

	// console.log(discoverData)

	const onClickHandler = (id) => {
		setActiveButton(id)
		setDiscoverData(filteredMovies)
	}

	// console.log(discoverData)

	const filteredMovies = discoverData.filter((movie) =>
		movie.genre_ids.includes(activeButton)
	)
	console.log("filteredMovies:", filteredMovies)
	console.log("Clicked on genre id:", id)
	return (
		<Container>
			<Title>{titleName}</Title>
			<SubTitle>{subtitleName}</SubTitle>
			<GenreWrap>
				{genresData.map((genre) => {
					return (
						<Button
							onClick={() => onClickHandler(genre.id)}
							key={genre.id}
							isactive={activeButton === genre.id ? "true" : undefined}>
							{genre.name}
						</Button>
					)
				})}
				{filteredMovies.map((movie) => (
					<PosterWrap key={movie.id}>
						<MoviePoster $moviebgUrl={movie.backdrop_path} />
					</PosterWrap>
				))}
			</GenreWrap>
		</Container>
	)
}
