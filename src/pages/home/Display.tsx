import { Link } from "react-router-dom";
import { DisplayType } from "./Home"
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { rateMovie, rateTvShow } from "./mutation";


interface DisplayData {
    id: number;
    overview: string;
    poster_path: string;
    title?: string;
    name?: string;
    vote_average: number;
    release_date: string;
}

interface Props {
    data: DisplayData[];
    displayType: DisplayType 
}

const Display = (props: Props) => {
    const {data, displayType} = props
    const [rating, setRating] = useState<number>(0)
    // const title = displayType === DisplayType.Movies ? data[0].title : data[0].name


    const {mutate: rateMovieMutation} = useMutation({
      mutationKey: ["rateMovie"],
      mutationFn: (id: number) => rateMovie(id, rating)
    })

    const {mutate: rateTvShowMutation} = useMutation({
      mutationKey: ["rateTvShow"],
      mutationFn: (id: number) => rateTvShow(id, rating)
    })

    const rate = displayType === DisplayType.Movies ? rateMovieMutation : rateTvShowMutation

  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2 p-6'>
        {
            data.map((displayData: DisplayData) => (
              <>
              <div className='p-4 border'>
              <Link key={displayData.id} to={`/${displayType === DisplayType.Movies ? 'movies' : 'tvshow'}/${displayData.id}`}>
              <img src={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`} alt="" className='w-full'/>
              </Link>
            <div className='bg-white text-[#a2a3a4] p-4'>
              <p className="font-bold text-black text-2xl">{displayType === DisplayType.Movies ? displayData.title : displayData.name}</p> 
              <p className="text-[.8em]">{`Release Date: ${displayData.release_date} | Rating: ${displayData.vote_average}`}</p>  
            </div>
            <div>
            <input 
            type="number" 
            min='0' 
            max='0' 
            step='0.5'
            onChange={(e) => setRating(Number(e.target.value))}
            onClick={() => rate(displayData.id)}
            className="border border-[#353535] px-2 py-2 rounded-sm"
            />
            <button className="bg-[#353535] text-white px-4 py-2 rounded-sm">Rate</button>
          </div>
            </div>
           
            </>
            ))
          }
      </div>
  )
}

export default Display