import React from 'react'
import logo from '../assets/Tickitz 1.jpg'
import mglass from '../assets/bx_bx-search.jpg'
import avatar from '../assets/Ellipse 11.svg'
import burger from '../assets/gg_menu-right-alt.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
  <header className="bg-white">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-5 ">
    <div className="md:flex md:gap-x-12 items-center justify-between">
      <a href="#">
        <img
          className="h-9 md:h-14 md:w-auto"
          src={logo}
          alt="logo"
        />
      </a>
      <div className="hidden md:flex md:gap-x-12">
        <Link className="font-semibold text-base" to="/home">
          Home
        </Link>
        <Link className="font-semibold text-base" to="/movie">
          List Movie
        </Link>
      </div>
    </div>
    <div className="hidden md:flex md:gap-x-12 items-center justify-between">
      <img
        className="md:h-6 h-6 md:w-auto"
        src={mglass}
        alt=""
      />
      <img
        className="md:h-14 h-14 md:w-auto"
        src={avatar}
        alt=""
      />
    </div>
        <div className="md:hidden dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} fill="none" className="btn m-2"><img src={burger} alt="" /></label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu items-center shadow bg-base-100 rounded-box w-52">
                <li><a>Sign Up</a></li>
                <li><a>List Movie</a></li>
                <li><a>Home</a></li>
            </ul>
        </div>
  </nav>
</header>

  )
}

export default Header