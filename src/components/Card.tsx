"use client"
import React from 'react'
import Image from "next/image";
import cardData from '@/data/dataForCards';

const Card = ({data}) => {

    return (
        <>
            <div className={`relative m-2 cursor-pointer bg-zinc-100 border-zinc-100 text-zinc-900
             shadow-md hover:shadow-xl hover:scale-105 duration-500 h-[660px]
             w-[300px] border p-2 rounded-md flex flex-col`}>
                <img className='mx-auto rounded-lg h-40' src={data.urlToImage} alt={data.title} />
                <div className="text-center font-bold text-xl my-2">
                    {data.title}
                </div>
                <p className={`absolute bottom-16 left-0 flex m-4 justify-center items-center h-[240px] overflow-hidden text-center rounded-lg bg-zinc-200 border-zinc-200 text-zinc-800`}>
                    {data.description}
                </p>
                <button className="absolute bottom-1 left-12 p-3 mx-12 my-4 text-white px-2 bg-blue-500 rounded-lg btn">
                <a href={data.url} target='blank'>See Full Story</a>
                    </button>
            </div>
        </>
    )
}

export default Card