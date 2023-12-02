import { useEffect, useState } from "react";
import { MainBanner } from "../../components/MainBanner";
import { Loading } from "../../components/Loading";
import { WebpageTitle } from "../../components/WebpageTitle";
import { airingTodaySerie} from "../../api";
import { GenreList } from "../../components/GenreList";






export const Serie = () => {

    const [isLoading, setIsLoading] = useState();
    const [airingTodaySerieData, setAiringTodaySerieData] = useState();
   



    useEffect(() => {
        (async () => {
            try {
                const { results: nowSerieResults } = await airingTodaySerie();
                setAiringTodaySerieData(nowSerieResults);

                
            } catch (error){
                console.error("Error:" + error)
            }
            setIsLoading(false);
        })();

    },[])

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                    <div>
                         {airingTodaySerieData&&  (
            <>
                            <WebpageTitle titleName={"Series"}/>
                                <MainBanner data={airingTodaySerieData[0]} showTitleBlock={false} showBlurr={true} />   
                                   
            </>
                        )}
                        <GenreList titleName={"Don't know what new serie to catch on?"} subtitleName={"Serie genres"} showSerieGenreList={true} showMovieGenreList={false} /> 
                    </div>
            )
        }
        </>
    )
}