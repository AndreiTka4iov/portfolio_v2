import Navbar from "./Navbar";

const Header = () => {
    return ( 
        <header className="
            fixed
            z-20
            top-0
            flex
            justify-center
            items-center
            sm:justify-between
            w-full
            bg-stone-800 
            h-16
            pl-4
            pr-4
            lg:pl-32
            lg:pr-32
        ">
            <h1 className="
                hidden
                sm:block
                text-gray-300
                text-2xl
                opacity-0 
                animation-delay-300 
                animate-toRight
            ">Portfolio.</h1>
            <Navbar />
        </header>
     );
}
 
export default Header;