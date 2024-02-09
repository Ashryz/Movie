import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'
import { VscColorMode } from "react-icons/vsc";
import { themeAction } from '../pages/store/themeAction';
// import { changeLang } from '../pages/store/LangAction';
import { LangContext } from './LangContext';
import { langAction } from '../pages/store/LangAction';



function Navbar() {

    const favorites = useSelector((state => state.combinefavo.favorites))
    const mytheme = useSelector((state => state.combinetheme.theme))
    const dispatch = useDispatch();

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return

        navigate(`/search?q=${search}`)
        setSearch('')
    }

    const handleToggletheme = () => {
        console.log("clicked");
        dispatch(themeAction(mytheme === 'light' ? 'dark' : 'light'))
    }
    // const { contextLang, setContextLang } = useContext(LangContext)


    const myLang = useSelector((state) => state.compineLang.lang)
    const changeCurrentLang = () => {
        dispatch(langAction(myLang === "en" ? "ar" : "en"))
    }
    return (
        <nav className={`navbar navbar-expand-lg  fw-bold ${mytheme === "light" ? "bg_light text-white" : "bg_dark text-white "} `}>
            <div className="container-fluid">

                <Link className="navbar-brand fs-3 text-info" to={"/"}>Movies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ">
                        <li className='nav-item'>

                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link fw-bold text-warning" to={"/"}>Top Rated</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-warning" to={"/upcoming"}>Upcoming</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-warning" to={"/favorites"}>Favorites <FaHeart className='fs-5 text-danger ' /> <span class='visually'>{favorites.length}</span></Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input className="form-control me-2" type="search"
                            placeholder="Search for a movie"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll  ">
                        <li className="nav-item">
                            <Link className="nav-link text-info" to={"/sign"}>Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-info" to={"/login"}>Sign-In</Link>
                        </li>
                        <li className="nav-item">
                            {/* onClick={() => handleToggletheme()} */}
                            <Link onClick={() => handleToggletheme(mytheme)} >  <VscColorMode className="fs-4 text-info" /></Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-info" onClick={() => changeCurrentLang()}>{myLang} </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar