import {teams} from "../../utils/constant";
import TeamCard from "@/components/TeamCard";
import SolutionCard from "@/components/SolutionCard";

export default function Solution () {
    const solutions = [
        {
            title:"Tenant Management System",
            img:"/Game%20analytics-bro.png",
            description:"This system streamlines tenant onboarding, complaint handling, and payment processes. It provides landlords with detailed analytics on their financial performance, simplifying property management.\n"
        },
        {
            title:"Hut Finder",
            img:"/House%20searching-bro.png",
            description:"This application aids tenants in effortlessly transitioning from their current homes to new ones, while also helping landlords efficiently market vacant properties, ensuring smoother moves and better occupancy rates"  },
        {
            title:"Casual Labourer App",
            img:"/Construction%20worker-rafiki.png",
            description:"Our job marketplace connects tenants with skilled laborers like electricians and plumbers, improving service delivery and facilitating quick and reliable maintenance and repair services."
        }
    ]

    return (
        <div id="feature" className="scroll-mt-24 snap-start  flex flex-col justify-center items-center gap-y-10 w-full relative mt-12 max-w-[90rem] px-4 mx-auto">
            <div className="flex flex-col justify-center items-center gap-y-2">
                <h2 className="text-base md:text-lg text-[#4154f1]"> SOLUTION </h2>
                <p className="text-xl text-blue-950">Our current project is a comprehensive three-part system designed
                    to revolutionize the real estate market by simplifying the complexities of property management,
                    labor procurement, and house hunting. Aimed at enhancing the experiences of both landlords and
                    tenants, this innovative 3 part suite ensures efficiency and convenience in managing and
                    transitioning real estate engagements.

                </p>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-around items-center gap-y-14 gap-x-6">
                {
                    solutions.map((solution, index) => <SolutionCard key={index} solution={solution}/>)
                }
            </div>
        </div>
    )
}