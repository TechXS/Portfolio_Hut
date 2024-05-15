import Link from 'next/link';

const Navbar = () => {
    const navlinks = [
        {
            name:"Home",
            url:"/"
        },
        {
            name:"About",
            url:"/#about"
        },
        {
            name:"Feature",
            url:"/#feature"
        },
        {
            name:"Team",
            url:"/#team"
        },
        {
            name:"Contact Us",
            url:"/#contact"
        }
    ]
    return (
        <nav className="flex flex-row items-center w-full sticky top-0 justify-between pt-2.5 pb-1 px-4 bg-white z-10">
            <Link href="/" className="text-blue-950 text-3xl font-bold flex flex-row items-center justify-center gap-x-2">
                <img rel="icon"
                     src={`/icons/hut.png`}
                     width={50}
                     height={50}
                />
               <h1>  The Hut</h1>
            </Link>
            <div className=" hidden md:flex flex-row items-center justify-center basis-4/5 gap-x-10">
                {
                    navlinks.map((nav,index)=> <Link key={index} href={nav.url} className="text-xl text-blue-950 font-semibold active:text-[#4154f1]">
                        {nav.name}
                    </Link>)
                }

            </div>
        </nav>
    );
};

export default Navbar;
