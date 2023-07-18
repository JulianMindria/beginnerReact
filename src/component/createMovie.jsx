/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState } from 'react'
import useApi from '../helper/useApi'
import { Show, Container } from '../helper/toast'



function createMovie() {
    const [form, setForm] = useState()
    
    const api = useApi()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleInput = (e) => {
        const data = {...form}
        data[e.target.name] = e.target.value
        setForm(data)
      }
    
      const handleSubmit = () => {
        api({
          method: 'POST',
          url: '/movie',
          data: form
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


  return (
    <>
        <section className="relative max-w-7xl mx-auto w-full h-full py-10 flex flex-col font-inter">
            <div className="relative flex flex-col gap-y-8 w-full h-full px-16 justify-center">
                <div className="">
                <div className="justify-center flex xl:flex-row flex-col gap-x-5">
                    <div>
                        <img
                        className="w-60 h-auto xl:mx-10 mx-auto"
                        src=''
                        alt=""
                        />
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="file"
                        name="banner"
                        required=""
                        onChange={handleInput}
                        />
                    </div>

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
                    />
                </div>
                </div>
                <button
                type="submit"
                className="bg-primary h-16 rounded-lg text-white font-bold"
                onClick={handleSubmit}
                >
                ADD NEW MOVIE
                </button>
            </div>
        </section>
    </>
  )
}

export default createMovie