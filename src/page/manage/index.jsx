/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../../component/header'
import Footer from '../../component/footer'
import Updatecards from '../../component/updateCards'
import useApi from '../../helper/useApi'
import { Container, Show } from '../../helper/toast'
import Select from 'react-dropdown-select'

function manage() {
    const [manager, setManager] = useState([])
    const [form, setForm] = useState({})
    const api = useApi() 
    const [selectedImage, setSelectedImage] = useState(null);
    const [genres, setGenre] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [selectGen, setSelectGen] = useState([])

  // This function will be triggered when the file field change
    

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(e.target.files[0]);
        }
    };

    const selectGenre = (values) => setSelectGen(values)

    const arr = selectGen.map(v => v.genre_id)

    const removeSelectedImage = () => {
        setSelectedImage();
      };

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
            const {data}= await axios.get(`http://localhost:8333/movie?limit=4&page=${currentPage}`)
            setManager(data.data)
            setTotalPages(Math.ceil(data.meta.total / 6));
        } catch (error) {
            console.log(error)
        }
    }

    const handleInput = (e) => {
      const data = {...form}
      data[e.target.name] = e.target.value
      setForm(data)
    }

    const goToPrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
      };
      
      const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const createMovie = () => {
        const formData = new FormData();
        formData.append('movie_banner', selectedImage);
        formData.append('title', form.title);
        formData.append('director', form.director);
        formData.append('casts', form.casts);
        formData.append('date_released', form.date_released);
        formData.append('duration', form.duration);
        formData.append('synopsis', form.synopsis);
        for (var i = 0; i < arr.length; i++) {
            formData.append('genre[]', arr[i]);
          }


        api({
            method: 'POST',
            url: '/movie',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>{
            Show('Registration Success', 'success')
        }).catch(err=>{
            const axiosErr = err.response.data
            if (axiosErr.message !== undefined) {
                Show(axiosErr.message, 'warning')
            } else if (axiosErr.error !== undefined) {
                Show(axiosErr.error, 'error')
            }
        })

    }
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        getMovies()
        getGenre()
    }, [currentPage])

  return (
    <>
        <Header />
        <section className="relative max-w-7xl mx-auto w-full h-full py-10 flex flex-col font-inter">
            <Container />
            <div className="relative flex flex-col gap-y-8 w-full h-full px-16 justify-center">
                <div className="">
                <div className="justify-center flex xl:flex-row flex-col gap-x-5">
                    <div>
                    <div className='flex flex-col gap-y-2'>
                        <input
                        accept="image/*"
                        type="file"
                        onChange={imageChange}
                        />
                        {selectedImage && (
                        <div className='flex flex-col gap-y-2'>
                            <img
                            className="w-60 h-auto rounded xl:mx-10 mx-auto"
                            src={URL.createObjectURL(selectedImage)}
                            alt="Thumb"
                            />
                            <button className="w-40 h-8 mx-auto rounded-md items-center text-primary hover:bg-primary hover:text-white flex justify-center bg-white border border-primary" onClick={removeSelectedImage}>
                            Remove image
                            </button>
                        </div>
                        )}
                    </div>
                    </div>

                    <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col font-mulish">
                        <label htmlFor="title" className="text-gray-600 py-2">
                        Movie Name
                        </label>
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="text"
                        placeholder='Write movie name...'
                        name="title"
                        required="" 
                        onChange={handleInput}                />
                    </div>
                    <div className="flex flex-col font-mulish">
                        <label htmlFor="dir" className="text-gray-600 py-2">
                        Director
                        </label>
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="text"
                        required=""
                        placeholder='Write director...'
                        name="director"
                        onChange={handleInput}
                        />
                    </div>
                    <div className="flex flex-col font-mulish">
                        <label htmlFor="date" className="text-gray-600 py-2">
                        Release Date
                        </label>
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="text"
                        name="date_released"
                        placeholder='Write release date...'
                        required=""
                        onChange={handleInput}
                  />
                    </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col font-mulish">
                        <label className="text-gray-600 py-2">
                        Genre
                        </label>
                        <Select 
                            type="text"
                            name='genre'
                            className="rounded-lg h-16 border border-gray-200 px-5"
                            options = {genres.map(e => ({ label: e.genre_name, value: e.genre_id, genre_id: e.genre_id }))}
                            onChange={selectGenre}
                            multi
                        />
                    </div>
                    <div className="flex flex-col font-mulish">
                        <label htmlFor="casts" className="text-gray-600 py-2">
                        Casts
                        </label>
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="text"
                        name="casts"
                        placeholder='Write Casts...'
                        required=""
                        onChange={handleInput}                
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="min" className="text-gray-600 py-2">
                            Duration Minute
                        </label>
                        <input
                            className="rounded-lg h-16 border border-gray-200 px-5"
                            type="text"
                            name="duration"
                            placeholder='Write Duration...'
                            required=""
                            onChange={handleInput}
                        />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full pt-10 flex-start">
                    <label htmlFor="sy" className="text-gray-600 py-2">
                    Synopsis
                    </label>
                    <textarea
                    className="rounded-lg w-auto h-32 border border-gray-200 px-5"
                    required=""
                    placeholder='Write synopsis...'
                    onChange={handleInput}
                    name="synopsis"
                    />
                </div>
                </div>
                <button
                type="submit"
                className="bg-primary h-16 rounded-lg text-white font-bold"
                onClick={createMovie}
                >
                SUBMIT
                </button>
            </div>
        </section>
        <section className="bg-gray-50">
        <div className="mx-auto flex md:flex-row flex-col max-w-7xl md:items-center justify-between gap-y-6 pt-10 pb-2 px-5 md:p-9">
            <p className="font-bold text-2xl">List Movie</p>
        </div>
        <div className="mx-auto max-w-7xl text-center items-center grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 grid-flow-row grid- bg-white py-8 px-10 rounded-xlg">
            {manager.map((v)=>{
                return <Updatecards name={v.title} image={v.movie_banner} genre={v.genres} id={v.movie_id}/>
            })}
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
        <Footer />
    </>
  )
}

export default manage