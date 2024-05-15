import TeamCard from "@/components/TeamCard";
import {socialIcons, teams} from "../../utils/constant";

export default function  SolutionCard({solution}){

    return (

        <div className="flex flex-col group items-center justify-center shadow-md hover:shadow-2xl w-[22rem] md:w-96 min-h-[35rem] group">
            <div className="h-80 flex items-center">
                <img src={solution.img} alt={`${solution.title}'s Picture`} className="rounded-xl w-80 aspect-auto group-hover:scale-[0.92] transition ease-in delay-150 duration-500"/>
            </div>
            <div
                className='flex flex-col items-center justify-center p-4 gap-y-4'>
                <div className={"flex flex-col items-center justify-center gap-y-3 max-w-3xl text-wrap"}>
                    <h4 className='font-semibold text-2xl text-blue-950'>{solution.title}</h4>
                    <span className="text-lg text-slate-600">{solution.description}</span>
                </div>
            </div>
        </div>
         )
}