import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import './App.css'
import Auth from "./pages/auth/Auth"
import Home from "./pages/home/Home"
import Movies from "./pages/movies/Movies"
import TvShow from "./pages/tvShow/TvShow"


function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/rated" element={<h1>Rated</h1>}/>
        <Route path="/movies/:id" element={<Movies />}/>
        <Route path="/tvshow/:id" element={<TvShow />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
