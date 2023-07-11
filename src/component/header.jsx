import React from 'react'
import logo from '../assets/Tickitz 1.jpg'
import mglass from '../assets/bx_bx-search.jpg'
import avatar from '../assets/Ellipse 11.svg'
import burger from '../assets/gg_menu-right-alt.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { logout } from '../store/reducer/user'

function Header() {
  const {isAuth} = useSelector((s)=>s.users)
  const dispatch = useDispatch()

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
    {isAuth ? (
          <div className="hidden md:flex md:gap-x-12 items-center justify-between">
          <img
            className="md:h-6 h-6 md:w-auto"
            src={mglass}
            alt=""
          />
          <div>
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1 btn-ghost btn-circle avatar">           
            <img
              className="object-cover"
              src={avatar}
              alt=""
            /></label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Profile</a></li>
              <li><Link onClick={()=>{dispatch(logout())}}>Logout</Link></li>
            </ul>
          </div>
          </div>
          <div className="md:hidden dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} fill="none" className="btn m-2"><img src={burger} alt="" /></label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu items-center shadow bg-base-100 rounded-box w-52">
                <li><a>Profile</a></li>
                <li><a>List Movie</a></li>
                <li><a>Home</a></li>
                <li><Link onClick={()=>{dispatch(logout())}}>Logout</Link></li>
            </ul>
        </div>
        </div>
        ) : (
        <div>
        <div className="hidden md:flex md:gap-x-12 items-center justify-between">
          <Link className="h-10 w-32 bg-primary mx-auto items-center flex justify-center text-white rounded-lg" to="/">Sign Up</Link>
        </div>
                <div className="md:hidden dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} fill="none" className="btn m-2"><img src={burger} alt="" /></label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu items-center shadow bg-base-100 rounded-box w-52">
                    <li><a>List Movie</a></li>
                    <li><a>Home</a></li>
                </ul>
        </div>
        </div>

      )}
  </nav>
</header>

  )
}

export default Header