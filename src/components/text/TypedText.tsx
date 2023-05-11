import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
    text: string,
    className: string,
}

const TypedText: React.FC<TypedTextProps> = ({ text, className }) => {
    const element = useRef(null);

    useEffect(() => {        
        const typed = new Typed(element.current, {
          strings: [text],
          typeSpeed: 100,
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
    }, []);

    return ( 
        <h3 className={className}>
            <span ref={element}></span>
        </h3>
     );
}
 
export default TypedText;