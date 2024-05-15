import TeamCard from "@/components/TeamCard";
import {teams} from "../../utils/constant";

export default function  Team(){
    return (
        <div id="team" className="scroll-mt-24 flex flex-col justify-center items-center gap-y-8 w-full relative mt-12 max-w-[90rem] px-4 mx-auto">
            <div className="flex flex-col justify-center items-center gap-y-2">
                <h2 className="text-base md:text-lg text-[#4154f1]"> TEAM </h2>
                <p className="font-semibold text-3xl md:text-4xl text-blue-950">Our hard working team</p>
            </div>
            <div className="flex flex-row justify-around items-center gap-y-14 gap-x-4 flex-wrap">
                {
                    teams.map((team, index) => <TeamCard key={index} user={team}/>)
              }
          </div>
        </div>
    )
}