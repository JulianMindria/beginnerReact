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
    const [sortGenre, setsortGenre] = useState ('')
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState('')
    const [date, setDate] = useState('')

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
            const {data}= await axios.get(`http://localhost:8333/movie?limit=4&page=${currentPage}&genre=${sortGenre}`)
            setMovies(data.data)
            setTotalPages(Math.ceil(data.meta.total / 4));
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

    const filterGenre = (v) =>{
      if (v.target.value !== 'All'){
        setsortGenre (v.target.value) 
      }
      else{
        setsortGenre('')
      }
    }
    
    const filterMovies = (v) => {
      v.preventDefault()
      setSearch(v.target.value)
    }

    const filteredMovies = movies.filter((v) => {
      if (search){
        return v.title.includes(search);
      }
      else if(date){
        return v.date_released.includes(date)
      }else{
        return movies
      }
      
    });


    const dateOnclick = (v) => {
      v.preventDefault()
      setDate(v.target.value)
    }

    const filterBydate = movies.filter((e) => {
      return e.date_released.includes(date)
    })

    console.log(filterBydate)
    

    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        getGenre()
    }, [])

    useEffect(()=>{
      getMovies()
    }, [currentPage, search, sortGenre, date])


  return (
    <>
        <Header/>
        <section className="bg-gray-50">
  <div className="mx-auto flex md:flex-row flex-col max-w-7xl md:items-center justify-between gap-y-6 pt-10 pb-2 px-5 md:p-9">
    <p className="font-bold text-2xl">List Movie</p>
    <div className="flex md:justify-end gap-x-6">
        <div className="flex justify-between w-1/4s">
            <select className="select select-bordered w-full max-w-xs" onChange={filterGenre}>
                <option>All</option>
                {
                    genres.map((v)=>{
                        return <option>{v.genre_name}</option>
                    })
                }
            </select>
        </div>
      <input
        className="h-12 w-80 bg-gray-50 border border-gray-300 bg-white rounded-md px-5"
        type="text"
        id="search"
        name="search"
        onChange={filterMovies}
        value={search}
        placeholder="Search Movie Name ..."
      />
    </div>
  </div>
  <div className="relative gap-x-5 flex max-w-7xl mx-auto overflow-scroll px-5 py-5">
            <button
            onClick={dateOnclick}
            value="September"
            className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
            >
            September
            </button>
            <button
            value="Oktober"
            onClick={dateOnclick}
            className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
            >
            October
            </button>
            <button
            value="November"
            onClick={dateOnclick}
            className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
            >
            November
            </button>
            <button
            value="Desember"
            onClick={dateOnclick}
            className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
            >
            Desember
            </button>
            <button
            value="January"
            onClick={dateOnclick}
            className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
            >
            january
            </button>
            <button
            value="February"
            onClick={dateOnclick}
            className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
            >
            February
            </button>
            <button
            value="March"
            onClick={dateOnclick}
            className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
            >
            March
            </button>
            <button
            value="April"
            onClick={dateOnclick}
            className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
            >
            April
            </button>
            <button
            value="May"
            onClick={dateOnclick}
            className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
            >
            May
            </button>
            <button
            value="June"
            onClick={dateOnclick}
            className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
            >
            June
            </button>
            <button
            value="July"
            onClick={dateOnclick}
            className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
            >
            July
            </button>
            <button
            value="August"
            onClick={dateOnclick}
            className="w-10 h-5 px-16 py-5 flex text-primary hover:bg-primary font-medium hover:text-white justify-center items-center text-center py-2 border border-primary rounded-md"
            >
            August
            </button>
        </div>
  <div className="mx-auto max-w-7xl text-center items-center grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 grid-flow-row grid- bg-white py-8 px-10 rounded-xlg">
        {movies ? (
            filteredMovies.map((v)=>{
              return <Cards name={v.title} image={v.movie_banner} genre={v.genres} id={v.movie_id} date={v.date_released} />
          })
        ):(
            <h1 className='absolute left-0 right-0 m-auto text-primary font-bold text-2xl'>data not found</h1>
        )}     

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