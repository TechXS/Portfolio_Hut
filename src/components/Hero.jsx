import {socialIcons} from "../../utils/constant";

export default function Hero() {
    return (
       <div className="flex flex-col md:flex-row justify-center md:justify-start items-center h-full relative max-w-[90rem] mx-auto px-4">
           <div className="relative h-96 flex flex-col justify-center md:justify-start">
               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">We offer modern solutions for growing your business</h1>
               <p className="text-base md:text-lg text-gray-400 mx-auto max-w-2xl">Welcome to our platform where we offer innovative
                   solutions to optimize property management and enhance returns on investment.</p>
           </div>
           <div>
               <img rel="icon"
                    src="/House%20searching-bro.png"
                    width={1200}
                    height={1200}
               />
           </div>

       </div>
    )
}