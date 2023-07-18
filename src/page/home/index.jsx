import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../../component/header'
import Footer from '../../component/footer'
import Cards from '../../component/cards'
import hero from '../../assets/Group 14.svg'
import CardHome from '../../component/cardHome'
import useApi from '../../helper/useApi'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { addData } from '../../store/reducer/user'

function Home() {

  const [movies, setMovies] = useState([])
  const api = useApi()
  const {isAuth} = useSelector((s)=>s.users)

  const dispatch = useDispatch()

  const getMovies = async () => {
      try {
          const {data}= await api.get('/movie?limit=8')
          setMovies(data.data)
      } catch (error) {
          console.log(error)
      }
  }

  const getUserdata = async () => {
    try {
      const { data } = await api.get('/user')
      dispatch(addData(data.data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    if (isAuth){
      getUserdata()
    }
  }, [isAuth])
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
      getMovies()
  }, [])
  return (
    <>
        <Header/>
        <article className="mx-auto items-center justify-between p-5 ">
  <div className="max-w-7xl flex md:flex-row flex-col gap-y-5 mx-auto justify-between ">
    <div className="flex flex-col my-auto">
      <p className="md:text-2xl text-lg text-gray-400">
        Nearest Cinema, Newest Movie,
      </p>
      <p className="md:text-6xl text-4xl text-primary font-bold">
        Find out now!
      </p>
    </div>
    <div className="mx-24">
      <img className="" src={hero} />
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between py-10">
        <div className="mx-20 items-center flex flex-col gap-y-5">
          <p className="text-2xl text-primary font-bold">Now Showing</p>
          <div className="h-1 bg-primary w-24" />
        </div>
        <a className="mx-20 text-primary font-extrabold text-base">view all</a>
      </div>
      <div className="flex overflow-scroll gap-x-5 pb-10 mx-5">
      {
            movies.map((v)=>{
                return <CardHome image={v.movie_banner}/>
            })
        }
      </div>
    </div>
  </div>
  <div className="max-w-7xl mx-auto">
    <div className="flex justify-between py-10">
      <p className="text-2xl font-bold">Upcoming Movies</p>
      <a className="mx-20 text-primary font-extrabold text-base">view all</a>
    </div>
    <div className="relative gap-x-5 flex max-w-7xl mx-auto overflow-scroll px-5 py-5">
      <a
        href="#"
        className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
      >
        September
      </a>
      <a
        href="#"
        className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
      >
        October
      </a>
      <a
        href="#"
        className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
      >
        November
      </a>
      <a
        href="#"
        className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
      >
        Desember
      </a>
      <a
        href="#"
        className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
      >
        january
      </a>
      <a
        href="#"
        className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
      >
        February
      </a>
      <a
        href="#"
        className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
      >
        March
      </a>
      <a
        href="#"
        className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
      >
        April
      </a>
      <a
        href="#"
        className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
      >
        May
      </a>
    </div>
    <div className="mx-auto max-w-7xl text-center items-center grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 grid-flow-row grid- bg-white py-8 px-10 rounded-xlg">
    {
            movies.map((v)=>{
                return <Cards name={v.title} image={v.movie_banner} genre={v.genre_id} id={v.movie_id} />
            })
        }
    </div>
  </div>
  <div className="py-5 max-w-7xl mx-auto my-5 items-center flex flex-col gap-y-12">
    <div className="text-center">
      <h1 className="text-gray-600 text-2xl">Be the vanguard of the</h1>
      <h2 className="text-5xl font-bold text-primary">Moviegoers</h2>
    </div>
    <div className="flex md:flex-row flex-col gap-y-5 gap-x-5">
      <form>
        <input
          className="px-5 h-12 w-96 rounded border border-gray-200"
          type="text"
          name="email"
          id="email"
          placeholder="Type your email"
        />
      </form>
      <button
        className="h-12 md:w-32 w-96 bg-primary mx-auto items-center flex justify-center text-white rounded"
        href="#"
      >
        Join Now
      </button>
    </div>
    <div className="flex flex-col text-center">
      <h3 className="text-sm text-gray-400">
        By joining you as a Tickitz member, <br />
        we will always send you the latest updates via email
      </h3>
    </div>
  </div>
</article>

        <Footer/>
    </>
  )
}

export default Home