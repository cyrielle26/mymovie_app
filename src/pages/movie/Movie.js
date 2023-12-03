import { useEffect, useState } from "react";
import { MainBanner } from "../../components/MainBanner";
import { Loading } from "../../components/Loading";
import { WebpageTitle } from "../../components/WebpageTitle";
import { nowPlayingMovie } from "../../api";
import { GenreList } from "../../components/GenreList";

export const Movie = () => {
  const [isLoading, setIsLoading] = useState();
  const [nowPlayingMovieData, setNowPlayingMovieData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: nowMovieResults } = await nowPlayingMovie();
        setNowPlayingMovieData(nowMovieResults);
      } catch (error) {
        console.error("Error:" + error);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
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
            showSerieGenreList={false}
            showMovieGenreList={true}
          />
        </div>
      )}
    </>
  );
};
