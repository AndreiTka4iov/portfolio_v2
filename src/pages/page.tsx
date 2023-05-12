import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";

const Page = () => {
    return ( 
        <div className="
            bg-stone-800 
            w-100 
            h-max
        ">
            <HomePage/>
            <AboutPage/>
            <ProjectsPage/>
        </div>
     );
}
 
export default Page;