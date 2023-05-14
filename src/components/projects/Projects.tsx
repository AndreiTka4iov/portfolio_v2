import ProjectCart from "./ProjectCart";

const Projects = () => {
    const project = [
        {
            id: 1, 
            srcImg: "/portfolio_v2/images/projects/airbnb.png", 
            title: "Airbnb clone", 
            descr: "This is a repository for a Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth.", 
            git: "https://github.com/AndreiTka4iov/Airbnb_clone", 
            href: "https://airbnb-clone-ev1l46rus.vercel.app"
        },
        {
            id: 2, 
            srcImg: "/portfolio_v2/images/projects/todos.png", 
            title: "Todos", 
            descr: "This project is made to demonstrate the skills of working with data and states using React, Redux, JavaScript. The website is adapted for all devices. The work was done according to the layout.", 
            git: "https://github.com/AndreiTka4iov/todos", 
            href: "https://andreitka4iov.github.io/todos/"
        },
        {
            id: 3, 
            srcImg: "/portfolio_v2/images/projects/posts.png", 
            title: "Posts", 
            descr: "This project is made to demonstrate the skills of working with data using React, Redux, JavaScript. The website is adapted for all devices. The data was taken from \"JsonPlaceholder\".", 
            git: "https://github.com/AndreiTka4iov/posts", 
            href: "https://andreitka4iov.github.io/posts/"
        },
        {
            id: 4, 
            srcImg: "/portfolio_v2/images/projects/auth.png", 
            title: "Authorisation", 
            descr: "As a frontend developer i focus on visual quality of website, on responsibility for any devices and cool animations. This project is created to show examples of my skills in React, Redux and JS with this fancy authorisation page.", 
            git: "https://github.com/AndreiTka4iov/registration", 
            href: "https://andreitka4iov.github.io/registration/"
        },
    ]
    return ( 
        <div className="
        flex
        justify-around
        flex-wrap
        gap-4
        overflow-hidden
        w-full
        h-fit
        relative
        mt-4
        ">
        {project.map(elem => 
            <ProjectCart 
                key={elem.id}
                srcImg={elem.srcImg} 
                title={elem.title} 
                descr={elem.descr} 
                git={elem.git} 
                href={elem.href}
            />
        )}
            
        </div>
     );
}
 
export default Projects;