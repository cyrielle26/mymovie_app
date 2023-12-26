/** @format */

import { useForm } from "react-hook-form"
import { search } from "../../api"
import { useEffect, useState } from "react"
import { MainLayout } from "../../components/MainLayout"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { IMG_URL } from "../../constants"
import { ScrollTop } from "../../lib/ScrollTop"
import { Link, useParams } from "react-router-dom"
import { Loading } from "../../components/Loading"

const Container = styled.div`
	width: 100%;

	@media screen and (max-width: 900px) {
		margin-top: 100px;
	}
	@media screen and (max-width: 480px) {
		margin-bottom: 120px;
	}
`

const InputWrap = styled.div`
	padding-top: 100px;
	padding-right: 5%;
	height: 7%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`

const Title = styled.h3`
	font-size: 20px;
	padding-bottom: 20px;
	z-index: 11;
`

const Form = styled.form`
	z-index: 11;
`

const Input = styled.input`
	all: unset;
	margin: 0.5em;
	color: ${(props) => props.$inputColor || "red"};
	background: #f9f9f9;
	font-family: "oswald";
	font-weight: 800;
	border: none;
	border-radius: 5px;
	padding: 5px;
	width: 260px;
	opacity: 0.7;
	@media screen and (max-width: 480px) and (min-width: 300px) {
		margin-bottom: 50px;
	}
	&:focus {
		opacity: 1;
		transform: scale(1);
		box-shadow: 2px 2px 2px 2px #f5f5f5;
	}
`

const ConWrap = styled.div`
	height: 100%;
	padding: 45px 100px;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	column-gap: 30px;
	row-gap: 50px;
	@media screen and (max-width: 1200px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media screen and (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
		padding: 75px;
	}

	@media screen and (max-width: 900px) {
		padding: 50px;
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);

		row-gap: 30px;
	}
	@media screen and (max-width: 480px) and (min-width: 300px) {
		width: 100%;

		padding: 25px;
	}
`

const SearchResultsTitle = styled.h3`
	padding-left: 100px;
	font-size: 20px;
	margin-bottom: 45px;
	@media screen and (max-width: 1024px) {
		padding-left: 85px;
	}
	@media screen and (max-width: 900px) {
		padding-left: 50px;
	}

	@media screen and (max-width: 480px) and (min-width: 300px) {
		font-size: 16px;
		padding-left: 25px;
	}
`

const Con = styled.div`
	position: relative;
`

const Bg = styled.div`
	border-radius: 5px;
	height: 300px;

	background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
	background-color: #f9f9f9;
	box-shadow: 10px 10px 10px black;
	@media screen and (max-width: 768px) {
		height: 250px;
	}
	@media screen and (max-width: 600px) {
		height: 190px;
		border-radius: 10px;
	}
	@media screen and (max-width: 480px) and (min-width: 300px) {
		height: 200px;
		border-radius: 15px;
	}
`

const MovieTitle = styled.div`
	width: 100%;
	text-align: center;
	background-color: rgba(60, 110, 214, 0.8);
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 5px;
	border-radius: 5px;
	@media screen and (max-width: 600px) and (min-width: 300px) {
		font-size: 14px;
	}
`

const Button = styled.button`
	all: unset;
`

const NoResults = styled.h3`
	font-size: 20px;
	padding: 0 40%;
	word-break: keep-all;
`
const WrapTitle = styled.h3`
	padding-left: 100px;
	font-size: 20px;

	@media screen and (max-width: 1024px) {
		padding-left: 85px;
	}
	@media screen and (max-width: 900px) {
		padding-left: 50px;
	}

	@media screen and (max-width: 480px) and (min-width: 300px) {
		font-size: 16px;
		padding: 25px;
	}
`
// const SuggestionContainer = styled.div``;
// const SuggestionTitle = styled.div``;
// const CoverBg = styled.div``;

// const SerieTitle = styled.div``;

// const params = {
//   slidesPerView: 5.5,
//   spaceBetween: 20,
//   breakpoints: {
//     // when window width is >=  1024px
//     1024: {
//       slidesPerView: 5.5,
//       spaceBetween: 20
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 4.3,
//       spaceBetween: 15
//     },
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 3.2,
//       spaceBetween: 10
//     }
//   }
// };

export const Search = () => {
	const { register, handleSubmit } = useForm({
		mode: "onSubmit",
	})

	const [term, setTerm] = useState()
	const [isLoading, setIsLoading] = useState(false)
	const [movieResults, setMovieResults] = useState()
	const [tvResults, setTvResults] = useState()
	const [suggestionData, setSuggestionData] = useState()
	const [searchResults, setSearchResults] = useState([])

	const [hoveredMovieId, setHoveredMovieId] = useState(null)
	ScrollTop()

	const searchHandler = async (data) => {
		const { search: keyword } = data

		try {
			const { results: movieResults } = await search("movie", keyword)
			setMovieResults(movieResults)
			const { results: tvResults } = await search("tv", keyword)
			setTvResults(tvResults)

			setTerm(tvResults && movieResults)
			setIsLoading(true)
		} catch (error) {
			console.log(error)
		}
		setIsLoading(false)
	}

	console.log(tvResults)

	const showSearchResults = term && term.length > 0

	return (
		<>
			<Container style={{ height: showSearchResults ? "100%" : "65vh" }}>
				<InputWrap>
					<Title>Anything in mind?</Title>
					<Form onSubmit={handleSubmit(searchHandler)}>
						<Button type='submit'>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</Button>
						<Input
							{...register("search", {
								required: "Please enter a search term",
							})}
							type='text'
							placeholder='Movie, show...'
							$inputColor='#040714'
						/>
					</Form>
				</InputWrap>

				{isLoading ? (
					<Loading />
				) : (
					<MainLayout>
						{showSearchResults && (
							<>
								<SearchResultsTitle>Search Results</SearchResultsTitle>

								{movieResults && movieResults.length > 0 && (
									<>
										{" "}
										<WrapTitle>Movies</WrapTitle>
										<ConWrap>
											{movieResults.map((data) => (
												<Con key={data.id}>
													<Link to={`/movie/${data.id}`}>
														<Bg
															$bgUrl={
																data.backdrop_path
																	? `${IMG_URL}/w500/${data.backdrop_path}`
																	: "https://congtygiaphat104.com/template/Default/img/no.png"
															}
															onMouseEnter={() => setHoveredMovieId(data.id)}
															onMouseLeave={() => setHoveredMovieId(null)}
														/>
														{hoveredMovieId === data.id && (
															<MovieTitle>{data.title}</MovieTitle>
														)}
													</Link>
												</Con>
											))}
										</ConWrap>
									</>
								)}

								{tvResults && tvResults.length > 0 && (
									<>
										<WrapTitle>Series</WrapTitle>
										<ConWrap>
											{tvResults.map((data) => (
												<Con key={data.id}>
													<Link to={`/tv/${data.id}`}>
														<Bg
															$bgUrl={
																data.backdrop_path
																	? `${IMG_URL}/w500/${data.backdrop_path}`
																	: "https://congtygiaphat104.com/template/Default/img/no.png"
															}
															onMouseEnter={() => setHoveredMovieId(data.id)}
															onMouseLeave={() => setHoveredMovieId(null)}
														/>
														{hoveredMovieId === data.id && (
															<MovieTitle>{data.name}</MovieTitle>
														)}
													</Link>
												</Con>
											))}
										</ConWrap>
									</>
								)}

								{(!movieResults || movieResults.length === 0) &&
									(!tvResults || tvResults.length === 0) && (
										<NoResults>No results found.</NoResults>
									)}
							</>
						)}
					</MainLayout>
				)}
			</Container>
		</>
	)
}
