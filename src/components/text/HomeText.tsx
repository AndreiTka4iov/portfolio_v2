import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

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
        <div className="text-gray-300">
            <h3 className="text-3xl font-bold">Hello, it's Me</h3>
            <h1 className="text-6xl font-bold leading-tight">Andrey Tkachev</h1>
            <h3 className="text-3xl font-bold">And I'm a <span className="text-red-500" ref={element}></span></h3>
        </div>
     );
}
 
export default HomeText;