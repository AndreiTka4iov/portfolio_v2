import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import MyLinks from '../home/MyLinks';
import ButtonA from '../ButtonA';

const HomeText = () => {
    const element = useRef(null);

    useEffect(() => {        
        const typed = new Typed(element.current, {
          strings: ['Fullstack developer'],
          typeSpeed: 75,
        });
    
        return () => {
          typed.destroy();
        };
    }, []);

    return ( 
        <div className="text-gray-300 min-h-max">
            <h3 className="text-3xl font-bold">Hello, it's Me</h3>
            <h1 className="text-6xl font-bold leading-tight">Andrey Tkachev</h1>
            <h3 className="text-3xl font-bold">And I'm a <span className="text-red-500" ref={element}></span></h3>
            <span>I am from Moscow. I've been developing for 2 years.</span>
            <MyLinks/>
            <ButtonA href="https://t.me/Tcka4" className="mt-4" title="Download CV"></ButtonA>
        </div>
     );
}
 
export default HomeText;