import { HashRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { Movie } from "./pages/movie/Movie";
import { Serie } from "./pages/series/Serie";
import { PageNotFound } from "./pages/PageNotFound";
import { Header } from "./components/Header";


function Router () {
  return (
<HashRouter>
      <Routes>
        <Header/>
        <Route path={routes.home} element={Home} />
        <Route path={routes.search} element={Search} />
        <Route path={routes.movies} element={Movie} />
        <Route path={routes.series} element={Serie} />
        <Route path="*/" element={PageNotFound} />
      </Routes>
</HashRouter>
  );
}

export default Router;
