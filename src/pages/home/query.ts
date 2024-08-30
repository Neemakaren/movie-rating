export const fetchMovies = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmRlZWZkNThhNmFmNWM0MWU0ZmU1ZTU0ZDdiODEzMCIsIm5iZiI6MTcyNDc1Njg3MC4zNjUwODcsInN1YiI6IjY0NzQ2Yzg5YmUyZDQ5MDBhN2Q2YzgwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._uSzHYOc-6lBUMyQ7QtPO927pjzkmgUs-sFf4s6bSrE"
            }
        }
    )
    // console.log(res.json())

    return res.json()
}

export const fetchTvshows = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmRlZWZkNThhNmFmNWM0MWU0ZmU1ZTU0ZDdiODEzMCIsIm5iZiI6MTcyNDc1Njg3MC4zNjUwODcsInN1YiI6IjY0NzQ2Yzg5YmUyZDQ5MDBhN2Q2YzgwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._uSzHYOc-6lBUMyQ7QtPO927pjzkmgUs-sFf4s6bSrE"
            }
        }
    )
    // console.log(res.json())

    return res.json()
}