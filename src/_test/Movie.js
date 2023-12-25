/** @format */
import styled from "styled-components"
import { genreList } from "../api"
import { discover } from "../api"
import { useState, useEffect } from "react"
import {
	Container,
	Title,
	SubTitle,
	GenreWrap,
	Button,
	PosterWrap,
	MoviePoster,
} from "./movie_style"

export const Movie = ({
	type,
	titleName,
	subtitleName,
	genre,
	currentPage,
}) => {
	const [genresData, setGenresData] = useState([])
	const [activeButton, setActiveButton] = useState(null)
	const [discoverData, setDiscoverData] = useState([])

	useEffect(() => {
		const fetchGenresData = async () => {
			try {
				const getGenreData = await genreList("movie")
				setGenresData(getGenreData.genres)
			} catch (error) {
				console.error("Error fetching genres data:", error)
			}
		}
		fetchGenresData()
	}, [])

	console.log("genres:", genresData)

	useEffect(() => {
		const fetchDiscoverData = async () => {
			try {
				let allResults = []
				let currentPage = 1
				const { results: discoverResults } = await discover(
					"movie",
					genre,
					currentPage
				)
				// Check if there are more pages
				while (discoverResults.results && discoverResults.results.length > 0) {
					// Append the results of the current page to the array
					allResults = [...allResults, ...discoverResults.results]

					// Move to the next page
					currentPage++
				}
				setDiscoverData(discoverResults)
			} catch (error) {
				console.error("Error fetching discoverData", error)
			}
		}

		fetchDiscoverData()
	}, [])

	console.log("discover:", discoverData)

	const onClickHandler = (name, id) => {
		setActiveButton(name, id)
	}
	console.log("onclicked button", activeButton)

	const filteredMovies = discoverData.filter((movie) =>
		movie.genre_ids.includes(activeButton)
	)

	console.log("flitered movies:", filteredMovies)

	return (
		<>
			<Container>
				<Title>{titleName}</Title>
				<SubTitle>{subtitleName}</SubTitle>
				<GenreWrap>
					{genresData.map((genre) => {
						return (
							<Button
								onClick={() => onClickHandler(genre.id)}
								key={genre.name}
								isactive={
									activeButton === genre.name && genre.id ? "true" : undefined
								}>
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
		</>
	)
}
