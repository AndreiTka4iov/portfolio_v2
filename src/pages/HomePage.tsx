import NextBtn from "../components/NextBtn";
import People from "../components/icon/People";
import HomeText from "../components/text/HomeText";

const HomePage = () => {
    return ( 
        <div 
        id="home"    
        className="
            flex
            flex-col-reverse
            justify-around
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
            md:flex-row
            md:justify-between
        ">
            <HomeText />
            <People
                src="/images/people.svg"
                link="https://github.com/AndreiTka4iov"
            />
            <NextBtn href='#about'/>
        </div>
     );
}
 
export default HomePage;