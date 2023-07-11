/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../../component/header'
import Footer from '../../component/footer'
import axios from 'axios'
import Cards from '../../component/cards'



function movie() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [genres, setGenre] = useState([])
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState('')

    const getGenre = async () => {
        try {
            const {data}= await axios.get('http://localhost:8333/genre')
            setGenre(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getMovies = async () => {
        try {
            const {data}= await axios.get(`http://localhost:8333/movie?limit=4&page=${currentPage}&search=${search}`)
            setMovies(data.data)
            setTotalPages(Math.ceil(data.meta.total / 5));
            console.log(data.meta.total)
        } catch (error) {
            console.log(error)
        }
    }


    const goToPrevPage = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };
    
    const goToNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        getGenre()
    }, [])

    useEffect(()=>{
      getMovies()
    }, [currentPage, search])


  return (
    <>
        <Header/>
        <section className="bg-gray-50">
  <div className="mx-auto flex md:flex-row flex-col max-w-7xl md:items-center justify-between gap-y-6 pt-10 pb-2 px-5 md:p-9">
    <p className="font-bold text-2xl">List Movie</p>
    <div className="flex md:justify-end gap-x-6">
        <div className="flex justify-between w-1/4s">
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>All</option>
                {
                    genres.map((v)=>{
                        return <option>{v.list_genres}</option>
                    })
                }
            </select>
        </div>
      <input
        className="h-12 w-80 bg-gray-50 border border-gray-300 bg-white rounded-md px-5"
        type="text"
        id="search"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Movie Name ..."
      />
    </div>
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
    <div className="mx-auto flex max-w-7xl items-center justify-center p-5 gap-x-2 py-10">
      <div className="button page flex flex-row gap-x-2 mb-12 mt-8">
        {currentPage > 1 && (
          <button
            onClick={goToPrevPage}
            className="px-3 py-3 bg-white text-primary hover:bg-primary hover:text-white text-gray-600 w-20 h-10 items-center text-center flex justify-center rounded-lg border border-gray-300 font-semibold"
          >
            Prev
          </button>
        )}
        {currentPage < totalPages && (
          <button
            onClick={goToNextPage}
            className="px-3 py-3 bg-white text-primary hover:bg-primary hover:text-white text-gray-600 w-20 h-10 items-center text-center flex justify-center rounded-lg border border-gray-300 font-semibold"
          >
            Next
          </button>
        )}
      </div>
    </div>
</section>

        <Footer/>
    </>
  )
}

export default movie