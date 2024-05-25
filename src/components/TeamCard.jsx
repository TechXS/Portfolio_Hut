import {socialIcons} from "../../utils/constant";

export default function TeamCard({user}) {
    return (
       user && user.profile_pic != " " &&
    <div className="flex flex-col group items-center justify-center">
        <div>
            <img src={user.profile_pic} alt={`${user.name}'s Profile Picture`}
                 className="rounded-xl w-80 aspect-auto"/>
        </div>

        <div
            className='border flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg w-5/6 -mt-10 gap-y-4'>
            <div className="invisible group-hover:visible flex flex-row items-center justify-around gap-4 -mt-8 ">
                {
                    user.socials.map((data, index) =>
                        data.url != " " && <a key={index} href={data.url} target="_blank"> <img rel="icon"
                                                                                                src={socialIcons[data.name]}
                                                                                                width={25}
                                                                                                height={25}
                        /> </a>)
                }
            </div>
            <div className={"flex flex-col items-center justify-center"}>
                <h4 className='font-medium text-2xl text-blue-950'>{user.name}</h4>
                <span className="text-slate-600">{user.role}</span>
            </div>
        </div>
    </div>
    )
}