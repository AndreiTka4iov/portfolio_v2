import Navbar from "./Navbar";

const Header = () => {
    return ( 
        <header className="
            fixed
            z-20
            top-0
            w-full
            h-16
            pl-32
            pr-32
            bg-stone-800 
            flex
            justify-between
            items-center
        ">
            <h1 className="
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