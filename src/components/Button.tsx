interface ButtonProps {
    title: string,
    typeBtn?: any,
}

const Button: React.FC<ButtonProps> = ({typeBtn, title}) => {
    return ( 
        <button className="w-full h-14 bg-red-500 rounded-2xl text-gray-300 text-xl font-bold hover:bg-red-400 transition" type={typeBtn}>{title}</button>
     );
}
 
export default Button;