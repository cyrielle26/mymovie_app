import { HashRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { Movie } from "./pages/movie/Movie";
import { Serie } from "./pages/series/Serie";


function Router () {
  return (
<HashRouter>
      <Routes>
        <Route path={routes.home} element={Home} />
        <Route path={routes.search} element={Search} />
        <Route path={routes.movies} element={Movie} />
        <Route path={routes.series} element={Serie} />
      </Routes>
</HashRouter>
  );
}

export default Router;
