/** @format */

import { HashRouter, Routes, Route } from "react-router-dom"
import { routes } from "./routes"
import { Home } from "./pages/home/Home"
import { Movie } from "./_test/Movie"
import { Serie } from "./pages/series/Serie"
import { DetailMovie } from "./pages/detail/DetailMovie"
import { DetailSerie } from "./pages/detail/DetailSerie"
import { Search } from "./pages/search/Search"
import { PageNotFound } from "./pages/PageNotFound"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { MobileHomeBand } from "./components/MobileHomeBand"

const Router = () => {
	return (
		<HashRouter>
			<Header />
			<MobileHomeBand />
			<Routes>
				<Route path={routes.home} element={<Home />} />
				<Route path={routes.movies} element={<Movie />} />
				<Route path={routes.series} element={<Serie />} />
				<Route path={routes.movieDetail} element={<DetailMovie />} />
				<Route path={routes.serieDetail} element={<DetailSerie />} />
				<Route path={routes.search} element={<Search />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
			<Footer />
		</HashRouter>
	)
}

export default Router
