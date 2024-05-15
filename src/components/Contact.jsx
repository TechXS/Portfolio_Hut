import {socialIcons, teams} from "../../utils/constant";
import TeamCard from "@/components/TeamCard";

export default function Contact (){

    const contacts = [
        {
            name : "location",
            title : "Address",
            details :["A108 Adam Street", "New York, NY 535022"]

        },
        {
            name : "telephone",
            title : "Call Us",
            details :["+254741719984 ","+254741719984"]

        },
        {
            name : "email",
            title : "Email Us",
            details :["  samwainaina01@gmail.com"," techxweb@gmail.com"]

        },
        {
            name : "clock",
            title : "Open hours",
            details :[" Monday - Friday ", "9:00 - 5:00 pm"]

        }
    ]

    return (
        <div id="contact" className="scroll-mt-24 flex flex-col justify-center items-center gap-y-8 w-full relative mt-12 max-w-[90rem] mx-auto px-4">
            <div className="flex flex-col justify-center items-center gap-y-2">
                <h2 className="text-base md:text-lg text-[#4154f1]"> CONTACT </h2>
                <p className="font-semibold text-3xl md:text-4xl text-blue-950">Contact Us</p>
            </div>
            <div className="flex flex-col md:flex-row w-full relative items-center justify-center gap-y-4 ">
                <div className="flex flex-row basis-1/2 flex-wrap justify-around items-center w-full relative gap-3">
                    {contacts.map((contact, index) => <div key={index} className="flex flex-col gap-y-4 bg-[#fafbff] p-8 w-[20rem]">
                        <img rel="icon"
                             src={`/icons/${contact.name}.png`}
                             width={45}
                             height={45}
                        />
                        <h3 className="font-semibold text-lg md:text-xl text-blue-950">{contact.title}</h3>
                        <div className="text-slate-600">
                            <p>
                                {contact.details[0]}
                            </p>
                            <p>
                                {contact.details[1]}
                            </p>
                        </div>
                    </div>)}
                </div>
                <form className="flex flex-col justify-center items-center bg-[#fafbff] p-8 gap-y-4">
                    <div className="flex flex-row justify-around gap-x-6 w-full relative">
                        <input type="text" name="name" className="border border-gray-500 rounded-sm w-full py-2 px-5  " placeholder="Your Name" required/>

                        <input type="email" name="email" className="border border-gray-500 rounded-sm w-full py-2 px-5  "  placeholder="Your Email" required/>
                    </div>


                    <input type="text" name="subject" className="border border-gray-500 rounded-sm w-full py-2 px-5  "  placeholder="Subject" required/>
                    <textarea name="Message" rows={5} className="border border-gray-500 rounded-sm w-full py-2 px-5  "  placeholder="Message"></textarea>

                    <button className="bg-[#4154f1] py-2 px-5 text-[#fff] rounded-md transition  ease-in-out delay-150 w-[15rem]">Send Message</button>

                </form>

            </div>
        </div>
    )
}