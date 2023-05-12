import TagCloudSphere from "../components/about/TagCloudSphere.jsx";
import AboutText from "../components/text/AboutText";

const AboutPage = () => {
    return ( 
        <div
        id="about"
        className="
            overflow-hidden
            flex
            flex-col
            justify-center
            items-center
            w-full
            h-screen
            relative
            pl-4
            pr-4
            pt-16
            pb-9
            lg:pl-32
            lg:pr-32
            lg:flex-row
            lg:justify-around
        "
        >
           <TagCloudSphere/>
           <AboutText/>
        </div>
     );
}
 
export default AboutPage;