import { useEffect } from "react";
import TagCloud from "TagCloud";

const TagCloudSphere = () => {
    useEffect(() => {
        const container = '.tagcloud';
        const texts = [
            'HTML5', 
            'CSS3', 
            'JavaScript', 
            'TypeScript',
            'React', 
            'Redux', 
            'Toolkit',
            'Next',
            'Prisma', 
            'NodeJS',
            'Express',
            'Sqlite3',
            'MongoDB',
            'PostgreSQL',
            'Git',
            'Figma',
            'Intersection Observer',
            'AG Grid',
            'chartjs',
            'Photoshop',

        ];
        const options = {
            radius: 225,
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: true,
        };
        TagCloud(container, texts, options);
    }, [])

    return ( 
        <div className="
            min-w-fit
            min-h-fit
        ">
            <span 
            className="
                tagcloud
                text-red-500
                
            "></span>
        </div>
     );
}
 
export default TagCloudSphere;