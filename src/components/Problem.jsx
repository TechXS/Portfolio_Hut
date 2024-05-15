export default function Problem (){
    return (
        <div id="about" className="scroll-mt-24 flex flex-col justify-center items-center gap-y-8 w-full relative mt-12 px-4 max-w-[90rem] mx-auto">
            <div className="flex flex-col justify-center items-center gap-y-2">
                <h2 className="text-base md:text-lg text-[#4154f1]"> PROBLEM </h2>
                <p className="font-semibold text-3xl md:text-4xl text-blue-950">Problem Statement</p>
            </div>
            <div className="flex flex-col md:flex-row w-full relative items-center justify-center ">
                <div className="bg-[#f6f9ff] basis-1/2 p-6 mx-6 md:m-0 h-80 flex items-center">
                    <p>The traditional property management process is riddled with inefficiencies, leading to challenges
                        such as manual paperwork, delayed maintenance requests, lack of transparency in communication,
                        and
                        difficulty in managing multiple properties simultaneously. These issues result in increased
                        operational costs, tenant dissatisfaction, and missed opportunities for maximizing property
                        revenue.
                        As a result, property managers are in dire need of modern solutions to streamline their
                        operations,
                        improve tenant experiences, and enhance overall profitability.
                    </p>
                </div>


                <div className="basis-1/2">
                    <img rel="icon"
                         src="/city.jpg"
                         width={1200}
                         height={1200}
                    />
                </div>
            </div>

        </div>
    )
}