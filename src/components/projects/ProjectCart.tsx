import ButtonA from "../ButtonA";
import { BsGithub } from 'react-icons/bs'

interface ProjectCartProps {
    srcImg: string,
    title: string,
    descr: string,
    git: string,
    href: string,
}

const ProjectCart: React.FC<ProjectCartProps> = ({srcImg, title, descr, git, href}) => {
    return ( 
        <div className="
            flex
            flex-col
            items-center
            gap-3
            w-80
            p-3
            bg-stone-700
            rounded-xl
        ">
            <div className="
                w-72
                h-96
                rounded-xl
                overflow-hidden
            ">
                <img src={srcImg} alt="image" />
            </div>
            <div className="
                w-72
                h-fit
                text-left
            ">
                <h3 className="text-3xl font-bold text-red-500">{title}</h3>
                <p className="max-w-72 h-fit hyphens-manual text-gray-300">{descr}</p>
            </div>
            <div className="
                flex
                justify-between
                items-center
                w-72
                mt-auto
            ">
                <a 
                href={git}
                className="
                    flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-full
                    border-2
                    border-red-500
                    text-red-500
                    hover:bg-red-500
                    hover:text-gray-300
                    transition
                "
                >
                    <BsGithub/>
                </a>
                <ButtonA href={href} title="Whatch"/>
            </div>
        </div>
     );
}
 
export default ProjectCart;