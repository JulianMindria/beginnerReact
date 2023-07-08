
import React from 'react'

function details({image, title, genre, duration, director, synopsis}) {
  return (
    <>
        <main className="mx-auto flex md:flex-row flex-col items-center max-w-7xl h-auto gap-x-10 justify-center p-5">
<div className="flex flex-shrink-0 p-8 border border-gray-200 rounded">
    <img className="w-60 h-auto" src={image} alt="" />
</div>
<div className="flex flex-col gap-y-20">
    <div className="flex flex-col md:items-start items-center">
    <div className="flex flex-col md:items-start items-center mt-10 gap-y-2">
        <div className="title">
        
        <h1 className="text-4xl font-bold">{title}</h1>
        </div>
        <div className="genre">
        <h3 className="text-lg text-gray-600">{genre}</h3>
        </div>
    </div>
    <div className="flex gap-x-12 gap-y-5 pt-6">
        <div className="">
        <div className="">
            <p className="text-sm text-gray-600 my-2">Release date</p>
            <p className="caption">June 28, 2017</p>
        </div>
        <div className="details">
            <p className="text-sm text-gray-600 my-2">Directed by</p>
            <p className="caption">{director}</p>
        </div>
        </div>
        <div>
        <div className="details">
            <p className="text-sm text-gray-600 my-2">Duration</p>
            <p className="caption">{duration} minutes</p>
        </div>
        <div className="details">
            <p className="text-sm text-gray-600 my-2">Casts</p>
            <p className="caption">
            Tom Holland, Michael Keaton, Robert Downey Jr., ...
            </p>
        </div>
        </div>
    </div>
    <div className="my-10">
        <div className="md:block hidden h-0.5 mb-10 bg-gray-100" />
        <p className="text-xl font-semibold">Synopsis</p>
        <p className="leading-8 mt-2 text-gray-600">
            {synopsis}
        </p>
    </div>
    </div>
</div>
</main>
    </>
  )
}

export default details

