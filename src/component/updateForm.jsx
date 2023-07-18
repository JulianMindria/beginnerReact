/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Select from 'react-dropdown-select'
import useApi from '../helper/useApi'
import { Show, Container } from '../helper/toast'



function updateForm({names, dates, genres, cast, directors, syn, images, durations, id}) {

    const [selectedImage, setSelectedImage] = useState(null);
    const [genre, setGenre] = useState([])
    const [form, setForm] = useState({})
    const [selectGen, setSelectGen] = useState([])

    const api = useApi()

    const getGenre = async () => {
        try {
            const {data}= await axios.get('http://localhost:8333/genre')
            setGenre(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const selectGenre = (values) => setSelectGen(values)
    const arr = selectGen.map(v => v.genre_id)


    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(e.target.files[0]);
        }
    };

    let filterSrc = '';
    if (selectedImage !== null){
        filterSrc = ''
    }else{
        filterSrc = images
    };

    const removeSelectedImage = () => {
        setSelectedImage();
      };

    const handleInput = (e) => {
    const data = {...form}
    data[e.target.name] = e.target.value
    setForm(data)
    }

    const updateMovie = () => {
        const formData = new FormData();
        formData.append('movie_id', id)
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
            method: 'PATCH',
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

    useEffect(()=>{
        getGenre()
    }, [])


  return (
    <>
        <section className="relative max-w-7xl mx-auto w-full h-full py-10 flex flex-col font-inter">
            <div className="relative flex flex-col gap-y-8 w-full h-full px-16 justify-center">
                <div className="">
                <div className="justify-center flex xl:flex-row flex-col gap-x-5">
                <div className='flex flex-col gap-y-2'>
                        <input
                        accept="image/*"
                        type="file"
                        defaultValue=''
                        onChange={imageChange}
                        />
                        {selectedImage && (
                        <div className='flex flex-col gap-y-2'>
                            <img
                            className="w-60 h-auto rounded xl:mx-10 mx-auto"
                            src={URL.createObjectURL(selectedImage)}
                            alt="images"
                            />
                            <button className="w-40 h-8 mx-auto rounded-md items-center text-primary hover:bg-primary hover:text-white flex justify-center bg-white border border-primary" onClick={removeSelectedImage}>
                            Remove image
                            </button>
                        </div>
                        )}
                        <img className="w-60 h-auto rounded xl:mx-10 mx-auto" src={filterSrc} alt='' />
                    </div>

                    <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col font-mulish">
                        <label htmlFor="title" className="text-gray-600 py-2">
                        Movie Name
                        </label>
                        <input
                        className="rounded-lg h-16 border border-gray-200 px-5"
                        type="text"
                        key={names}
                        name="title"
                        required=""
                        onChange={handleInput}
                        defaultValue={names}
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
                        key={directors}
                        name="director"
                        onChange={handleInput}
                        defaultValue={directors}
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
                        key={dates}
                        required=""
                        onChange={handleInput}
                        defaultValue={dates}
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
                            className="rounded-lg h-16 border border-gray-200 px-5"
                            placeholder={genres}
                            name='genre'
                            onChange={selectGenre}
                            options = {genre.map(e => ({ label: e.genre_name, value: e.genre_id, genre_id: e.genre_id }))}
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
                        required=""
                        key={cast}
                        onChange={handleInput}
                        defaultValue={cast}
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
                            key={durations}
                            onChange={handleInput}
                            defaultValue={durations}
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
                    key={syn}
                    name="synopsis"
                    defaultValue={syn}
                    />
                </div>
                </div>
                <button
                type="submit"
                className="bg-primary h-16 rounded-lg text-white font-bold"
                onClick={updateMovie}
                >
                UPDATE
                </button>
            </div>
        </section>
    </>
  )
}

export default updateForm