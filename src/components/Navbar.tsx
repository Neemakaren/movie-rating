import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="mx-auto bg-[#353535] text-white py-6 px-10 flex justify-between mt-2 shadow-lg text-2xl space-x-6 font-bold my-4">
        <div className="space-x-4">
        <Link to='/'>Home</Link>
        <Link to='/rated'>Rated</Link>
        </div>
        <Link to='auth'>Auth</Link>
    </nav>
  )
}

export default Navbar