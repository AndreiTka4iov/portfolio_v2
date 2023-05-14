import Footer from "../components/footer/Footer";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";

const Page = () => {
    return ( 
        <div className="bg-stone-800 w-100 h-max">
            <HomePage/>
            <AboutPage/>
            <ProjectsPage/>
            <ContactPage/>
            <Footer/>
        </div>
     );
}
 
export default Page;