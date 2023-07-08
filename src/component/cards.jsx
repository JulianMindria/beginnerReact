/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {useNavigate} from 'react-router-dom'

function cards({name, image, genre, id}) {
    const navigate = useNavigate()
  return (
    <>
        <div className="w-56 h-auto bg-white border border-gray-300 items-center mx-auto py-6 rounded-lg flex flex-col">
            <img
                className="mx-auto w-40 h-64"
                src={image}
                alt="black widow"
            />
            <div className="p-5">
                <p className="font-bold text-base tracking-wide leading-5">
                {name}
                </p>
                <p className="text-gray-400 tracking-wider font-medium text-sm leading-8">
                {genre}
                </p>
            </div>
            <button
                className="w-40 h-8 mx-auto rounded-md items-center text-primary hover:bg-primary hover:text-white flex justify-center bg-white border border-primary"
                onClick={() => navigate(`/movie/${id}`)}
            >
                Detail
            </button>
        </div>
    </>
  )
}

export default cards