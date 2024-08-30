import { useParams } from 'react-router-dom';
import { fetchTvShowDetails } from './query';
import { useQuery } from "@tanstack/react-query";

const TvShow = () => {
    const {id} = useParams<string>()

    if(!id) {
        return <div>invalid Tvshow ID</div>
    }

    const {data, isLoading } = useQuery({
        queryKey: ["tvshow"], 
        queryFn : () => fetchTvShowDetails(id)
      })

    if (isLoading) {
        return <div>Loading...</div>
    }


  return (
    <section>
        <h3>{data.name}</h3>
        <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" />
        <div>
          <p>Created By: {data.created_by.map((creator: any) => creator.name).join('')}</p>
          <p>Run Time: {data.episode_run_time.join(', ')}</p>
          <p>Genres: {
            data.genres.map((genre: any) => (
              <p key={genre.id}>{genre.name}</p>
            ))
            }</p>
             <p>First Air Date: {data.first_air_date}</p>
             <p>Networks: {data.networks.map((network: any) => (
              <img src={`https://image.tmdb.org/t/p/original/${network.logo_path}`} alt="" />
             ))}</p>
             <p>Production Companies: {
              data.production_companies.map((company: any) => (
                company.name
              )).join(',')
              }</p>
              <p>Number of episodes: {data.number_of_episodes}</p>
              <p>Number of Seasons: {data.number_of_seasons}</p>
              <p>Vote Average: {data.vote_average}</p>
              <p>Language: {data.original_language}</p>
        </div>
    </section>
  )
}

export default TvShow