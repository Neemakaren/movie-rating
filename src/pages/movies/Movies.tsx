import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from './query';
import { useQuery } from "@tanstack/react-query";

const Movies = () => {
    const {id} = useParams<string>()

    if(!id) {
        return <div>invalid Movie ID</div>
    }

    const {data, isLoading } = useQuery({
        queryKey: ["movie"], 
        queryFn : () => fetchMovieDetails(id)
      })

    if (isLoading) {
        return <div>Loading...</div>
    }


  return (
    <section>
        <h3>{data.title}</h3>
        <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" />
        <div>
          <p>Is This Movie For Adults? {data.adult? 'yes' : 'no'}</p>
          <p>Budget: {data.budget}</p>
          <p>Genres: {
            data.genres.map((genre: any) => (
              <p key={genre.id}>{genre.name}</p>
            ))
            }</p>
             <p>IMDB ID: {data.imdb_id}</p>
             <p>Popularity: {data.popularity}</p>
             <p>Production Companies: {
              data.production_companies.map((company: any) => (
                company.name
              )).join(',')
              }</p>
              <p>Release Date: {data.release_date}</p>
              <p>Runtime: {data.runtime}</p>
              <p>Vote Average: {data.vote_average}</p>
              <p>Language: {data.original_language}</p>
        </div>
    </section>
  )
}

export default Movies