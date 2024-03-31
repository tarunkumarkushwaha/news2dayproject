"use client"
import React from 'react'
import Image from "next/image";
import cardData from '@/data/dataForCards';

const Card = ({data}) => {

    return (
        <>
            <div className={`m-2 cursor-pointer bg-zinc-100 border-zinc-100 text-zinc-900
             shadow-md hover:shadow-xl hover:scale-105 duration-500 h-[460px]
             w-[400px] border p-2 rounded-md flex flex-col justify-between`}>
                <img className='mx-auto rounded-lg' src={data.urlToImage} alt={data.title} />
                
                <div className="text-center font-normal text-lg my-2">
                    {data.title}
                </div>
                <div className={`flex flex-row justify-center text-center items-center rounded-lg h-[50%]  ${ "bg-zinc-200 border-zinc-200 text-zinc-800" }`}
                >
                    {data.description}
                </div>
            </div>
        </>
    )
}

export default Card