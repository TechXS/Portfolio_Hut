export default function Footer (){
    return (
        <div className="flex flex-row h-24 justify-center items-center bg-[#f6f9ff] mt-12 ">
            <div className="max-w-[90rem] mx-auto">
            © Copyright <strong><span>The HUT @{new Date().getFullYear()}</span></strong>. All Rights Reserved
        </div>
        </div>
    )
}