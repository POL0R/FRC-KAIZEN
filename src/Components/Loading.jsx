import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";



const Loading = () => {

    const loadingRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline();
    
        tl.to(loadingRef.current, {
            rotate: 360, 
            duration: 2, 
            repeat: 1,  
            ease: "linear",
        })
        .to(loadingRef.current, {
            x: -400
        }, "-=0.6")
        .to(loadingRef.current, {
            rotate: 360,  
            ease: "power1.inOut", 
            duration: 1.2,
            scale: 0.3,  
        }, "-=1.2") 
        .to(loadingRef.current, {
            opacity: 0
        })
        
    
    }, []); 
    


    return (
        <>
            <div className="loadingMainHolder">
            <img ref={loadingRef} className="cogwheelLoader" src="cogwheel.png" />  
            <img className="cogwheelLogo" src="FRC-Kaizen-Logo.png" />
            </div>
        </>
    )
}

export default Loading;