/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Show, Container } from '../helper/toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

function updateCards({name, image, genre, id}) {
    const deleteData = async(movie_id) => {
        try {
            await axios.get(`http://localhost:8333/movie/${movie_id}`);
            await axios.delete('http://localhost:8333/movie/', {
                data:{"movie_id":movie_id}
            })
            Show("Delete Success", "success")
        } catch (error) {
            const axiosErr = error.response.data
            if (axiosErr.message !== undefined) {
                Show(axiosErr.message, 'warning')
            } else if (axiosErr.error !== undefined) {
                Show(axiosErr.error, 'error')
            }
        }

    }

    const navigate = useNavigate()
  return (
    <>
        <div className="w-56 h-auto bg-white border border-gray-300 items-center mx-auto py-6 rounded-lg flex flex-col">
        <Container />
        <img
            className="mx-auto w-40 h-64"
            src={image}
            alt={name}
        />
        <div className="p-5">
            <p className="font-bold text-base tracking-wide leading-5">{name}</p>
            <p className="text-gray-400 tracking-wider font-medium text-sm leading-8">
            {genre}
            </p>
        </div>
        <div className="flex flex-col gap-y-2">
            <button
            className="w-40 h-8 mx-auto rounded-md items-center text-primary hover:bg-primary hover:text-white flex justify-center bg-white border border-primary"
            onClick={()=>navigate(`update/${id}`)}
            href="#"
            >
            Update
            </button>
            <Link to={"/manage"}>
                <button
                className="w-40 h-8 mx-auto rounded-md items-center text-rose-400 hover:bg-rose-400 hover:text-white flex justify-center bg-white border border-rose-400"
                onClick={()=>deleteData(id)}
                >
                Delete
                </button>
            </Link>

        </div>
        </div>
    </>
  )
}

export default updateCards