import { useMutation } from "@tanstack/react-query"
import { mutationLogin } from "./mutation"
import { useNavigate } from "react-router"


const Auth = () => {

  const {data, mutate} = useMutation({ 
    mutationKey: ["login"], 
    mutationFn: mutationLogin})

    const navigate = useNavigate()

const handleLogin = async () => {
  await mutate()
  localStorage.setItem("guest_session_id", data?.guest_session_id)
  navigate('/')
}


  return (
    <section className="container h-screen my-6 mx-auto flex flex-col justify-center items-center">
        <h2>Welcome: Login By Registering As A Guest Below</h2>
        {/* <form action="">Login</form> */}
        <button className="maxx" onClick={handleLogin}>login</button>
    </section>
  )
}

export default Auth