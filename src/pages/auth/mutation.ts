export const mutationLogin = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmRlZWZkNThhNmFmNWM0MWU0ZmU1ZTU0ZDdiODEzMCIsIm5iZiI6MTcyNDc1Njg3MC4zNjUwODcsInN1YiI6IjY0NzQ2Yzg5YmUyZDQ5MDBhN2Q2YzgwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._uSzHYOc-6lBUMyQ7QtPO927pjzkmgUs-sFf4s6bSrE"
            }
        }
    )
    console.log(res.json())

    return res.json()
}

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmRlZWZkNThhNmFmNWM0MWU0ZmU1ZTU0ZDdiODEzMCIsIm5iZiI6MTcyNDc1Njg2My40Mjk2ODgsInN1YiI6IjY0NzQ2Yzg5YmUyZDQ5MDBhN2Q2YzgwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.da19Y_lmw2VSF9bqhrV9MuI-Z97TVubHrVz0X-SwlvU


// curl --request GET \
//      --url https://api.themoviedb.org/3/authentication/guest_session/new \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmRlZWZkNThhNmFmNWM0MWU0ZmU1ZTU0ZDdiODEzMCIsIm5iZiI6MTcyNDc1Njg3MC4zNjUwODcsInN1YiI6IjY0NzQ2Yzg5YmUyZDQ5MDBhN2Q2YzgwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._uSzHYOc-6lBUMyQ7QtPO927pjzkmgUs-sFf4s6bSrE' \
//      --header 'accept: application/json'