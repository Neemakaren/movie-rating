import { useState } from "react";
import Display from "./Display";
import { fetchMovies, fetchTvshows } from "./query";
import { useQuery } from "@tanstack/react-query";


export enum DisplayType {
    Movies = 'movies',
    TvShows = 'tvshows' 
}

const Home = () => {
const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.Movies)


const {data: movieData, isLoading: isLoadingMovies } = useQuery({
  queryKey: ["movies"], 
  queryFn : fetchMovies
})


const {data: tvshowData, isLoading: isLoadingTvShows} = useQuery({
  queryKey: ["tvshows"], 
  queryFn : fetchTvshows
})

  return (
    <section>
    <div className="container mx-auto flex items-center justify-center space-x-4 mt-8">
        <button
        className={`${displayType === DisplayType.Movies ? "border-4 px-6 py-2 bg-[#353535] text-white" : "border-4 px-3 py-2"}`}
        onClick={() => setDisplayType(DisplayType.Movies)}
        >Movies</button>
        <button 
        className={`${displayType === DisplayType.TvShows ? "border-4 px-6 py-2 bg-[#353535] text-white" : "border-4 px-3 py-2"}`}
        onClick={() => setDisplayType(DisplayType.TvShows)}
        >Tv Shows</button>
    </div>

        {isLoadingMovies || isLoadingTvShows ? (
          <div>Loading</div>
        ) : (
        <div className="container mx-auto" >
          {displayType === DisplayType.Movies ? (
          <Display data={movieData.results} displayType={DisplayType.Movies}/>
          ) : (
          <Display data={tvshowData.results} displayType={DisplayType.TvShows}/>
        )}
        </div>
        )}

    </section>
  )
}

export default Home;
