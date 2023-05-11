import { FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'

const MyLinks = () => {
    return ( 
        <div
        className="
            flex
            gap-3
            mt-4
        "
        >
            <a 
            href="https://t.me/Tcka4"
            className="
                flex
                items-center
                justify-center
                w-9
                h-9
                rounded-full
                border-2
                border-red-500
                text-red-500
                hover:bg-red-500
                hover:text-gray-300
                opacity-0
                animate-toLeft
                transition
            "
            style={{'animationDelay' : 'calc(200ms * 1)'}}
            >
                <FaTelegramPlane/>
            </a>
            <a 
            href="https://github.com/AndreiTka4iov"
            className="
                flex
                items-center
                justify-center
                w-9
                h-9
                rounded-full
                border-2
                border-red-500
                text-red-500
                hover:bg-red-500
                hover:text-gray-300
                opacity-0
                animate-toLeft
                transition
            "
            style={{'animationDelay' : 'calc(200ms * 2)'}}
            >
                <BsGithub/>
            </a>
            <a 
            href="https://www.linkedin.com/in/andreitkachiov/"
            className="
                flex
                items-center
                justify-center
                w-9
                h-9
                rounded-full
                border-2
                border-red-500
                text-red-500
                hover:bg-red-500
                hover:text-gray-300
                opacity-0
                animate-toLeft
                transition
            "
            style={{'animationDelay' : 'calc(200ms * 3)'}}
            >
                <FaLinkedinIn/>
            </a>
            <a 
            href="mailto:andrei.tkachiov@gmail.com"
            className="
                flex
                items-center
                justify-center
                w-9
                h-9
                rounded-full
                border-2
                border-red-500
                text-red-500
                hover:bg-red-500
                hover:text-gray-300
                opacity-0
                animate-toLeft
                transition
            "
            style={{'animationDelay' : 'calc(200ms * 4)'}}
            >
                <HiMail/>
            </a>
        </div>
     );
}
 
export default MyLinks;