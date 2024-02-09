import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

// import TopRated from './pages/TopRated.js'
// import Upcoming from './pages/Upcoming.js'
// import { Search } from './pages/Search.js'
// import { Movie } from './pages/Movie'
// import { Favorites } from './pages/Favorites.js'
// import Sign from './pages/Sign.js'
// import Login from './pages/Login.js'
import myStore from './pages/store/Store.js'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <Provider store={myStore}>

      <App/>
      
      </Provider>
    

  </React.StrictMode>
)

{/* <BrowserRouter> */}

{/* <Routes>
        <Route element={<App />}>
          <Route path="/" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="search" element={<Search />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes> */}

{/* </BrowserRouter> */}