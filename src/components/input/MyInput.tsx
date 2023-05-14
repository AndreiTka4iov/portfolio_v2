interface MyInputProps {
    label: string, 
    type: string,
    name: string,
}

const MyInput: React.FC<MyInputProps> = ({label, type, name}) => {
    return ( 
        <div className="w-full h-fit flex flex-col gap-1 text-left">
            <label className="text-gray-300 text-2xl font-bol">Enter your <span className="text-red-500">{label}</span></label>
            {type === "textarea" 
            ? <textarea name={name} required className="w-full h-80 rounded-2xl bg-gray-300 pl-4 pr-4 outline-red-500 resize-none"/>
            : <input type={type} name={name} required className="w-full h-8 rounded-2xl bg-gray-300 pl-4 outline-red-500"/>
            }
        </div>
     );
}
 
export default MyInput;