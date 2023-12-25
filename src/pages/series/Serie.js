/** @format */

import { useEffect, useState } from "react"
import { Loading } from "../../components/Loading"
import { WebpageTitle } from "../../components/WebpageTitle"
import { MovieGenre } from "../../_test/MovieGenre"

export const Serie = () => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		;(async () => {
			try {
				;<MovieGenre />
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
					<>
						<WebpageTitle titleName={"tv"} />
						<MovieGenre
							titleName={"Don't know what serie to watch?"}
							subtitleName={"Series genres"}
							type={"tv"}></MovieGenre>
					</>
				</>
			)}
		</>
	)
}
