interface ButtonAProps {
    href: string,
    className: string,
    title: string
}

const ButtonA: React.FC<ButtonAProps> = ({href, className, title}) => {
    return ( 
        <a 
        href={href}
        className={`
            block
            p-3 
            w-max
            bg-red-500
            rounded-2xl
            text-lg
            hover:shadow-md
            hover:shadow-red-500
            transition
            ${className}
            `}
        >
            {title}
        </a>
     );
}
 
export default ButtonA;