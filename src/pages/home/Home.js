import { useEffect, useState } from "react";
import { MainBanner } from "../../components/MainBanner";
import { Loading } from "../../components/Loading";
import { WebpageTitle } from "../../components/WebpageTitle";
import { MainLayout } from "../../components/MainLayout";
import { nowPlayingMovie } from "../../api";
import { popularMovie } from "../../api";
import { ShowMovies } from "./ShowMovies";
import { TopTenShow } from "./TopTenShow";


export const Home = () => {
  const [nowPlayingMovieData, setNowPlayingMovieData] = useState();
  const [popMovieData, setPopMovieData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowMovieResults } = await nowPlayingMovie();
        setNowPlayingMovieData(nowMovieResults);
        
        const { results: popMovieResults } = await popularMovie();
        setPopMovieData(popMovieResults);
          

      } catch (error) {
        console.error("Error :" + error);
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
          {nowPlayingMovieData &&  (
            <>
                              {/* Remove the curly braces around nowPlayingMovieData[0] */}
                              <WebpageTitle titleName={"Home"}/>
                              <MainBanner data={nowPlayingMovieData[0]} showTitleBlock={true} showBlurr={false} /> 
                              <MainLayout>
                  <ShowMovies titleName={"NowPlaying! New movies"} movieData={nowPlayingMovieData} type={"movie"}  />
                  <TopTenShow titleName={"TOPTEN MOVIES TODAY"} movieData={popMovieData} type={"movie"} />
                              </MainLayout>
                              
                                
            </>
          )}
        </div>
      )}
    </>
  );
};
