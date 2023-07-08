import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'



function updateForm({name, date, genre, casts, director, synopsis, image, duration, id}) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [body, setUpdates] = useState({
        "movie_id": id,
        "title": `${name}`, 
        "movie_banner": `${image}`,
        "date_released": `${date}`, 
        "genre_id": `${genre}`, 
        "casts": `${casts}`, 
        "director": `${director}`, 
        "synopsis": `${synopsis}`, 
        "duration": `${duration}`
    })
    const handleInput = (event) => {
        setUpdates({...body, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.patch('http://localhost:8333/movie', {body})
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
    }


  return (
    <>
        <section className="relative max-w-7xl mx-auto w-full h-full py-10 flex flex-col font-inter">
            <form className="relative flex flex-col gap-y-8 w-full h-full px-16 justify-center">
                <div className="">
                <div className="justify-center flex xl:flex-row flex-col gap-x-5">
                    <img
                    className="w-60 h-auto xl:mx-10 mx-auto"
                    src={image}
                    alt=""
                    />
                    <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col font-mulish">
                        <label htmlFor="title" className="text-gray-600 py-2">
                        Movie Name
                        </label>
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="text"
                        name="title"
                        required=""
                        onChange={handleInput}
                        defaultValue={name}
                        />
                    </div>
                    <div className="flex flex-col font-mulish">
                        <label htmlFor="dir" className="text-gray-600 py-2">
                        Director
                        </label>
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="text"
                        required=""
                        name="director"
                        onChange={handleInput}
                        defaultValue={director}
                        />
                    </div>
                    <div className="flex flex-col font-mulish">
                        <label htmlFor="date" className="text-gray-600 py-2">
                        Release Date
                        </label>
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="text"
                        name="released"
                        required=""
                        onChange={handleInput}
                        defaultValue={date}
                        />
                    </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col font-mulish">
                        <label htmlFor="genre" className="text-gray-600 py-2">
                        Genre
                        </label>
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="text"
                        name="genre"
                        required=""
                        onChange={handleInput}
                        defaultValue={genre}
                        />
                    </div>
                    <div className="flex flex-col font-mulish">
                        <label htmlFor="casts" className="text-gray-600 py-2">
                        Casts
                        </label>
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="text"
                        name="genre"
                        required=""
                        onChange={handleInput}
                        defaultValue={casts}
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
                            required=""
                            onChange={handleInput}
                            defaultValue={duration}
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
                    onChange={handleInput}
                    name="synopsis"
                    defaultValue={synopsis}
                    />
                </div>
                </div>
                <button
                type="submit"
                className="bg-primary h-16 rounded-lg text-white font-bold"
                onClick={handleSubmit}
                >
                UPDATE
                </button>
            </form>
        </section>
    </>
  )
}

export default updateForm