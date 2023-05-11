import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'

interface NextProps {
    href: string,
}

const NextBtn: React.FC<NextProps> = ({href}) => {
    return ( 
        <a 
        href={href} 
        className='
            absolute
            left-0
            right-0
            z-10
            bottom-0
            h-9
            flex
            justify-center
            items-center
        '
        >
            <div
            className='
                w-8
                h-8
                bg-red-500
                flex
                justify-center
                items-center
                rounded-full
                animate-bounce
            '
            >
                <MdOutlineKeyboardDoubleArrowDown 
                className='
                    text-gray-300
                    text-2xl
                '
                />
            </div>
        </a>
     );
}
 
export default NextBtn;