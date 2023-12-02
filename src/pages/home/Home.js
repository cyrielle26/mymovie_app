import { useEffect, useState } from "react";
import { MainBanner } from "../../components/MainBanner";
import { Loading } from "../../components/Loading";
import { WebpageTitle } from "../../components/WebpageTitle";
import { MainLayout } from "../../components/MainLayout";
import { nowPlayingMovie } from "../../api";
import { popularMovie } from "../../api";
import { upcomingMovie } from "../../api";
import { popularSerie } from "../../api";
import { airingTodaySerie } from "../../api";
import { ShowMovies } from "./ShowMovies";
import { TopTenShow } from "./TopTenShow";


export const Home = () => {
  const [nowPlayingMovieData, setNowPlayingMovieData] = useState();
  const [popMovieData, setPopMovieData] = useState();
  const [upcomingMovieData, setUpcomingMovieData] = useState();
  const [popSerieData, setPopSerieData] = useState();
  const [airingTodayData, setAiringTodayData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowMovieResults } = await nowPlayingMovie();
        setNowPlayingMovieData(nowMovieResults);

        
        const { results: popMovieResults } = await popularMovie();
        setPopMovieData(popMovieResults);

        const { results: upMovieResults } = await upcomingMovie();
        setUpcomingMovieData(upMovieResults);

        const { results: popSerieResults } = await popularSerie();
        setPopSerieData(popSerieResults);

        const { results: airTodayResults } = await airingTodaySerie();
        setAiringTodayData(airTodayResults);
          

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
                              <WebpageTitle titleName={"Home"}/>
                              <MainBanner data={nowPlayingMovieData[0]} showTitleBlock={true} showBlurr={false} /> 
                              <MainLayout>
                  <ShowMovies titleName={"NowPlaying! New movies"} movieData={nowPlayingMovieData} type={"movie"}  />
                  <TopTenShow titleName={"TOPTEN MOVIES TODAY"} movieData={popMovieData} type={"movie"} />
                  <ShowMovies titleName={"Worth the wait! Upcoming movies"} movieData={upcomingMovieData} type={"movie"} />
                  <TopTenShow titleName={"TOPTEN SERIES TODAY"} movieData={popSerieData} type={"tv"} />
                  <ShowMovies titleName={"Airing Today! New series"} movieData={airingTodayData} type={"tv"} />
                              </MainLayout>
                              
                                
            </>
          )}
        </div>
      )}
    </>
  );
};
