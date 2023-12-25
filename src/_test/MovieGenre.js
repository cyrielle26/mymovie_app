/** @format */

import { genreList, discover } from "../api"
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

export const MovieGenre = ({
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
				const getGenreData = await genreList(type)
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
				let currentPage = 1
				const { results: discoverResults } = await discover(
					type,
					genre,
					currentPage
				)
				let allResults = discoverResults.totat_pages
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
				</GenreWrap>
				<PosterWrap>
					{filteredMovies.map((movie) => (
						<MoviePoster key={movie.id} $moviebgUrl={movie.backdrop_path} />
					))}
				</PosterWrap>
			</Container>
		</>
	)
}
