import Projects from "../components/projects/Projects";

const ProjectsPage = () => {
    return ( 
        <div
        id="projects"
        className="
            overflow-hidden
            w-full
            min-h-screen
            relative
            text-center
            pl-4
            pr-4
            pt-16
            pb-9
            lg:pl-32
            lg:pr-32
        "
        >
            <h1 className="
                sm:text-6xl
                text-4xl  
                font-bold 
                leading-tight  
                text-gray-300
                "><span className="text-red-500">My</span> Projects
            </h1>
            <Projects />
        </div>
     );
}
 
export default ProjectsPage;