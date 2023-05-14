import { BsGit } from "react-icons/bs";

const Footer = () => {
    return ( 
        <footer className="
            flex
            justify-center
            items-center
            w-full
            h-16
            bg-stone-700
            relative
        ">
            <hr className="
                w-5/6
                border-none
                text-gray-300
                bg-gray-300
                h-[1px]
            "/>
            <div className="
                w-20
                h-16
                bg-stone-700
                absolute
                left-1/2
                -translate-x-1/2
                flex
                justify-center
                items-center
            ">
                <a 
                href="https://github.com/AndreiTka4iov/portfolio_v2"
                className="text-gray-300 text-5xl hover:text-red-500 transition">
                    <BsGit/>
                </a>
            </div>
        </footer>
     );
}
 
export default Footer;