import NextBtn from "../components/NextBtn";
import People from "../components/icon/People";
import HomeText from "../components/text/HomeText";

const HomePage = () => {
    return ( 
        <div 
        id="home"    
        className="
            flex
            justify-between
            items-center
            w-full
            h-screen
            pl-32
            pr-32
            relative
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