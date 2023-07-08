import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../../component/header'
import Footer from '../../component/footer'
import Updatecards from '../../component/updateCards'


function manage() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [manager, setManager] = useState([])

    const getMovies = async () => {
        try {
            const {data}= await axios.get('http://localhost:8333/movie?limit=8')
            setManager(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        getMovies()
    }, [])

  return (
    <>
        <Header />
        <section className="bg-gray-50">
        <div className="mx-auto flex md:flex-row flex-col max-w-7xl md:items-center justify-between gap-y-6 pt-10 pb-2 px-5 md:p-9">
            <p className="font-bold text-2xl">List Movie</p>
            <div className="flex md:justify-end gap-x-6">
            <a
                className="h-12 w-32 bg-gray-50 border flex justify-between px-5 items-center border-gray-300 bg-white rounded-mlg text-gray-400"
                href="#"
            >
                Sort <img className="h-2 w-auto" src="./assets/Forward.png" alt="" />
            </a>
            <input
                className="h-12 w-80 bg-gray-50 border border-gray-300 bg-white rounded-mlg px-5"
                type="text"
                id="search"
                name="search"
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
            {manager.map((v)=>{
                return <Updatecards name={v.title} image={v.movie_banner} genre={v.genre_id} id={v.movie_id}/>
            })}
        </div>
        <div className="mx-auto flex max-w-7xl items-center justify-center p-5 gap-x-2 py-10">
            <a
            className="bg-white text-primary hover:bg-primary hover:text-white text-gray-600 w-10 h-10 items-center text-center flex justify-center rounded-lg border border-gray-300 font-semibold"
            href="#"
            >
            1
            </a>
            <a
            className="bg-white text-primary hover:bg-primary hover:text-white text-gray-600 w-10 h-10 items-center text-center flex justify-center rounded-lg border border-gray-300 font-semibold"
            href="#"
            >
            2
            </a>
            <a
            className="bg-white text-primary hover:bg-primary hover:text-white text-gray-600 w-10 h-10 items-center text-center flex justify-center rounded-lg border border-gray-300 font-semibold"
            href="#"
            >
            3
            </a>
            <a
            className="bg-white text-primary hover:bg-primary hover:text-white text-gray-600 w-10 h-10 items-center text-center flex justify-center rounded-lg border border-gray-300 font-semibold"
            href="#"
            >
            4
            </a>
        </div>
        </section>
        <Footer />
    </>
  )
}

export default manage