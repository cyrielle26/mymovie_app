/** @format */

import { useEffect, useState } from "react"
import { MainBanner } from "../../components/MainBanner"
import { Loading } from "../../components/Loading"
import { WebpageTitle } from "../../components/WebpageTitle"
import { nowPlayingMovie } from "../../api"
import { GenreList } from "../../components/GenreList"

import styled from "styled-components"
import { IMG_URL } from "../../constants"
import { genreList } from "../../api"
import { Link } from "react-router-dom"

export const Movie = () => {
	const [isLoading, setIsLoading] = useState()
	const [nowPlayingMovieData, setNowPlayingMovieData] = useState()
	const [activeButton, setActiveButton] = useState(null)

	const [discoverData, setDiscoverData] = useState([])

	//Get data from the  the api request {genrelist} type: "movie" / "tv"

	useEffect(() => {
		;(async () => {
			try {
				const { results: nowMovieResults } = await nowPlayingMovie()
				setNowPlayingMovieData(nowMovieResults)
			} catch (error) {
				console.error("Error:" + error)
			}
			setIsLoading(false)
		})()
	}, [])

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<>
					{nowPlayingMovieData && (
						<>
							<WebpageTitle titleName={"Movies"} />
							<MainBanner
								data={nowPlayingMovieData[0]}
								showTitleBlock={false}
								showBlurr={true}
							/>
						</>
					)}

					<GenreList
						titleName={"Don't know what movie to watch?"}
						subtitleName={"Movie genres"}
						type={"movie"}
					/>
				</>
			)}
		</>
	)
}
