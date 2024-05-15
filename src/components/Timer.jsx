"use client"

import {useEffect, useState} from "react";



export default function Timer(){

    const [timeleft,setTimeLeft] = useState({days:0,hrs:0,min:0,secs:0})


    useEffect(()=>{
        setTimeLeft(calcultaTimeLeft())

        const timer = setInterval(()=>{
            setTimeLeft(calcultaTimeLeft())
        },1000)

        return () => clearInterval(timer)
    },[])
    const calcultaTimeLeft = ()=>{
        let timeleft = {}
        let curentDate = new Date()
        let difference = new Date("2024-07-31").getTime() - curentDate.getTime()


        if (difference > 0 ) {
            timeleft = {
                days : Math.floor(difference/(1000*60*60*24)),
                hrs : Math.floor((difference/(1000*60*60)) %24),
                min : Math.floor((difference/1000/60)%60),
                secs : Math.floor((difference/1000)%60)
            }
        }

        return timeleft
    }
    return (
        <div className="flex flex-col justify-center items-center gap-y-8 w-full relative mt-12 max-w-[90rem] px-4 mx-auto">
            <div className="flex flex-col justify-center items-center gap-y-2">
                <h2 className="text-base md:text-lg text-[#4154f1]"> COMING SOON </h2>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="font-semibold text-xl text-blue-950">We're working hard to improve our website and we'll ready to launch after</p>
            </div>
            <div className="flex flex-row shrink justify-around items-center gap-y-14 gap-x-4 flex-nowrap">
                    {
                    Object.keys(timeleft).map((data,index)=>
                        <div key={index} className="bg-[#f6f9ff] flex flex-col gap-y-8 p-4 sm:p-6 md:p-8">
                            <h2 className="text-4xl md:text-5xl font-bold">{timeleft[data].toString()}</h2>
                            <p className="text-lg md:text-xl capitalize font-medium text-gray-600 opacity-75">{data}</p>

                        </div>
                    )
                }
            </div>
        </div>
    )
}