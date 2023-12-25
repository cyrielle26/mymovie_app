/** @format */

import { useEffect, useState } from "react"
import { MainBanner } from "../../components/MainBanner"
import { Loading } from "../../components/Loading"
import { WebpageTitle } from "../../components/WebpageTitle"
import { nowPlayingMovie } from "../../api"
import { MovieGenre } from "../../_test/MovieGenre"
import styled from "styled-components"

// const Container = styled.div`
// 	height: 100%;
// 	widht: 100vw;
// 	position: relative;
// 	background-color: red;
// `

export const Movie = () => {
	const [isLoading, setIsLoading] = useState()
	const [nowPlayingMovieData, setNowPlayingMovieData] = useState()

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
							<MovieGenre
								titleName={"Don't know what movie to watch?"}
								subtitleName={"Movie genres"}
								type={"movie"}>
								<MainBanner
									data={nowPlayingMovieData[0]}
									showTitleBlock={false}
									showBlurr={true}></MainBanner>
							</MovieGenre>
						</>
					)}
				</>
			)}
		</>
	)
}
