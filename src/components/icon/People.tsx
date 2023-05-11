interface peopleProps {
    src: string,
    link?: string,
}

const People: React.FC<peopleProps> = ({src, link}) => {
    return ( 
        <a href={link} className="
            w-64
            h-64
            opacity-0
            animate-toBottom
            animation-delay-400
            rounded-full
            overflow-hidden
            bg-red-500
        ">   
            <img src={src} alt="people"/>
        </a>
     );
}
 
export default People;