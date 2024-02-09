import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import TopRated from './pages/TopRated.js'
import Upcoming from './pages/Upcoming.js'
import { Search } from './pages/Search.js'
import { Movie } from './pages/Movie'
import { Favorites } from './pages/Favorites.js'
import Sign from './pages/Sign.js'
import Login from './pages/Login.js'
import { LangContext } from './components/LangContext.js'










function App() {

  const theme = useSelector((state) => state.combinetheme.theme)

  const [contextLang, setContextLang] = useState("En")
  if (theme === "light") {
    document.querySelector("body").classList.add("bg_light");
    document.querySelector("body").classList.remove("bg_dark");
  } else {
    document.querySelector("body").classList.add("bg_dark");
    document.querySelector("body").classList.remove("bg_light");
  }
  return (
    <div className={theme === "light" ? "App light bg_light " : "App dark bg_dark text-light "}>
      <LangContext.Provider value={{ contextLang, setContextLang }}>


        <BrowserRouter>
          <Navbar />
          <Outlet />

          <Routes>

            <Route path="/" element={<TopRated />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="search" element={<Search />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/login" element={<Login />} />

          </Routes>
        </BrowserRouter>
      </LangContext.Provider>
    </div>
  )
}

export default App


