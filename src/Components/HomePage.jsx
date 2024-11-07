import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Zoom from "./Zoom";
import Navbar from "./Navbar";
import { useFirebase } from "../context/firebase";

const HomePage = () => {

    

    const dropperRef = useRef();
    const mainParentHolderRefHome = useRef();
    const textRevealHomeRef = useRef();
    const textRevealTextRef = useRef();
    const mainCircleHeroRef = useRef();
    const comingSoonRef =useRef();
    const teamFormationDivRef = useRef();
    const teamFormationImageRef0 = useRef();
    const teamFormationImageRef1 = useRef();
    const teamFormationImageRef2 = useRef();
    const teamFormationImageRef3 = useRef();
    const teamFormationImageRef4 = useRef();
    const teamFormationOurRef = useRef();
    const wrapperImageRef = useRef();
    const carouselStoriesRef = useRef();
    const missionMainHolderRef = useRef();
    const dartImageRef = useRef();
    const dartBoardRef = useRef();
    const mainMoverCauserRef = useRef();
    const mainTextMissionRef = useRef();
    const missionSecondaryHolderRef = useRef();
    const eyeHolderVisionRef = useRef();
    const visionEyeImgRef = useRef();
    const mainHeadVisionRef = useRef();
    const contactRef = useRef(null);


    const [isNavbarOpen, setIsNavbarOpen] = useState(false);


    useEffect(() => {

        const tl0432 = gsap.timeline();

        // First greeting stays longer
        tl0432.to(".headerGreetingLoad:first-child", {
            opacity: 1,
            duration: 0.2,  // Slightly longer duration for the first greeting
            ease: "none",   // No easing for sudden effect
        })
        .to(".headerGreetingLoad:first-child", {
            opacity: 0,
            duration: 0.1,  // Sudden disappearance
            ease: "none",
            delay: 0.4      // Stays visible for a longer time before disappearing
        });

        // Animate all middle greetings (excluding first and last)
        tl0432.to(".headerGreetingLoad:not(:first-child):not(:last-child)", {
            opacity: 1,
            duration: 0.05,  // Shorter duration for sudden appearance
            ease: "none",    // No easing for sudden effect
            stagger: {
                each: 0.2,  // Time between showing each greeting
                onComplete: function() {
                    gsap.to(this.targets(), {
                        opacity: 0,
                        duration: 0.05,  // Sudden disappearance
                        ease: "none",
                        delay: 0.1       // Brief visibility before disappearing
                    });
                }
            }
        });

        // Last greeting stays longer
        tl0432.to(".headerGreetingLoad:last-child", {
            opacity: 1,
            duration: 0.2,  // Longer duration for the last greeting
            ease: "none",   // No easing for sudden effect
            delay: 0.3      // Ensures no overlap with the second-to-last greeting
        });

        // Main Home Holder moves after the last greeting
        tl0432.to(".mainHomeHolder", {
            top: "-100%",
            duration: 0.3,  // Faster movement for more abrupt transition
            ease: "none",   // No easing for the container animation
            delay: 0.5,     // Short delay after the last greeting fades out
            borderRadius: "0 0 100% 100%",  // Keeping this visual effect
        }, 2)
        tl0432.to(".overflowerHidder", {
            height: "fit-content",
            overflowY: "scroll",
            delay: 0.8,     // Short delay after the last greeting fades out
        }, 2)



        gsap.registerPlugin(ScrollTrigger);

        // Create a timeline for scroll-triggered animations (tl)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainParentHolderRefHome.current,
                start: "top top", 
                end: "+=1000",
                scrub: 0.5,
                pin: dropperRef.current, 
            }
        });

        gsap.to(dropperRef.current, {
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            rotateX: 5,
            rotateY: 15,
            duration: 1,
        });

        tl.fromTo(dropperRef.current, {
            scale: 0.5,
            filter: "blur(0px)",
        }, {
            filter: "blur(0px)",
            scale: 0.8,
            duration: 1,
        })
        .to(mainCircleHeroRef.current, {
            width: "0vw",
            height: "0vw",
        }, "<");

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: textRevealHomeRef.current,
                start: "-20% 50%",
                end: "+=550",
                scrub: 1,
            }
        });

        tl2.to(textRevealTextRef.current, {
            left: 0,
            duration: 15,
        })
        .to(textRevealTextRef.current, {
            color: '#9fc8fb',
            delay: 2,
            duration: 3,
        });

        const showComingSoon = () => {
            gsap.to(comingSoonRef.current, {
                opacity: 1,
                duration: 0.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        };

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: teamFormationDivRef.current,
                start: "top center", 
                end: "bottom 70%",
                scrub: 0.5,
                pin: wrapperImageRef.current,
                pinSpacing: false
            }
        });

        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: teamFormationDivRef.current,
                start: "90% center",
                end: "140% 70%",
                scrub: 0.5,
            }
        });
        

        tl3.to(teamFormationImageRef0.current, {
            opacity: 1,
            top: "30%",
            duration: 1,
        })
        .to(teamFormationImageRef1.current, {
            opacity: 1,
            right: "48%",
            top: "25%",
            duration: 1,
        })
        .to(teamFormationImageRef2.current, {
            opacity: 1,
            left: "48%",
            top: "25%",
            duration: 1,
        }, "<")
        .to(teamFormationImageRef3.current, {
            opacity: 1,
            right: "60%",
            top: "15%",
            duration: 1,
        })
        .to(teamFormationImageRef4.current, {
            opacity: 1,
            left: "60%",
            top: "15%",
            duration: 1,
        }, "<");

        tl4.to(teamFormationOurRef.current, {
            opacity: 1,
        })
        .to(teamFormationOurRef.current, {
            color: "white",
        });

        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: carouselStoriesRef.current,
                start: "-10%, center",
                end: "70%, 100%",
            }
        });

        tl5.to(carouselStoriesRef.current, {
            left: 0,
            duration: 2,
            ease: "power2.inOut",
        });

        const tl6 = gsap.timeline({
            scrollTrigger: {
                trigger: missionMainHolderRef.current,
                start: "35%, center",
                end: "+=200",
                scrub: 0.5,
                pin: missionSecondaryHolderRef.current,
                pinnedContainer: missionMainHolderRef.current,
            }
        });

        tl6.to(dartImageRef.current, {
            top: "115px",
            left: "1000px",
            transform: "rotate(30deg)"
        })
        .to(mainMoverCauserRef.current, {
            width: "170%"
        }, 0)
        .to(mainTextMissionRef.current, {
            opacity: 1,
            delay: 1,
        })

        const tl7 = gsap.timeline({
            scrollTrigger: {
                trigger: eyeHolderVisionRef.current,
                start: "5%, top",
                end: "+=1200",
                scrub: 0.5,
                pin: eyeHolderVisionRef.current,
            }
        });
        
        tl7.to(visionEyeImgRef.current, {
            scale: 10,
            ease: "power1.inOut",
            duration: 1,
            opacity: 0,
        })
        .to(visionEyeImgRef.current, {
            display: "none", // Temporarily hide the eye after the animation completes
            onStart: () => {
                visionEyeImgRef.current.style.display = 'block'; // Show the eye when scrolling back
            }
        });
        
        

        ScrollTrigger.create({
            trigger: textRevealHomeRef.current,
            start: "-50% top",
            onEnter: showComingSoon,
        });

        gsap.to(".kaizenCarouselTextHolder", {
            left: "5%",
            repeat: -1,
            duration: 3,
            ease: "linear",
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);  // Toggle the navbar state
    };

    const closeNavbar = () => {
        setIsNavbarOpen(false);  // Always close the navbar
    };
    
    const scrollToOurStory = () => {
        if (teamFormationDivRef.current) {  // Check if ref is not null
            teamFormationDivRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    const scrollToMission = () => {
        if (missionMainHolderRef.current) {  // Check if ref is not null
            missionMainHolderRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    const scrollToVision = () => {
        if (eyeHolderVisionRef.current) {  // Check if ref is not null
            eyeHolderVisionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    const scrollToContact = () => {
        if (contactRef.current) {  // Check if ref is not null
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    const dataCarousel = [
        {
            id: 1,
            title: 'Day 0 - Prelude',
            type: 'image',
            description: 'The first robotics team at JPIS was born in August 2024, sparked by one student’s determination to compete in the FIRST Robotics Competition (FRC). He gathered a team of 24 people, all eager to dive into the mechanical and electrical field while ensuring everyone contributed to marketing and outreach.',
        },
        {
            id: 2,
            title: 'Story 2',
            type: 'video',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 3,
            title: 'Story 3',
            type: 'image',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 4,
            title: 'Story 4',
            type: 'image',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 5,
            title: 'Story 5',
            type: 'video',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        }
    ];

    const instaRedirect = () => {
        window.location.href = 'https://www.instagram.com/frc.kaizen/';
    }

    const youTubeRedirect = () => {
        window.location.href = 'https://www.youtube.com/channel/UCz99f8E3U1499j46tQ6p3xA';
     }

    const blogSpotRedirect = () => { 
        window.location.href = 'https://www.blogspot.com/frckaizen';
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [notes, setNotes] = useState("");

    const { addContactInfo, isSubmitting } = useFirebase();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !notes) {
          alert("Please fill all fields");
          return;
        }
        await addContactInfo(name, email, phone, notes);
        setName(""); // Clear form
        setEmail("");
        setPhone("");
        setNotes("");
      };


    const [zoomData, setZoomData] = useState(null); 

    const handleZoom = (item) => {
        setZoomData(item);
    };

    const handleCloseZoom = () => {
        setZoomData(null);
    };

    return (

        <div className="overflowerHidder">
        <div className="mainHomeHolder">
            <h1 className="headerGreetingLoad">· Hello</h1>
            <h1 className="headerGreetingLoad">· Bonjour</h1>
            <h1 className="headerGreetingLoad">· Hola</h1>
            <h1 className="headerGreetingLoad">· مرحبًا</h1>
            <h1 className="headerGreetingLoad">· Hej</h1>
            <h1 className="headerGreetingLoad">· こんにちは</h1>
            <h1 className="headerGreetingLoad">· 你好</h1>
            <h1 className="headerGreetingLoad">· नमस्ते</h1>
        </div>
        
        <div className="holderMain">
            <div className="homePageMainHolder" ref={mainParentHolderRefHome}>


    <div class="hamburger-menu" onClick={toggleNavbar}>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>


            
                <div className="mainThingsHolderHero">
                    <div className="circleHolderHome" ref={mainCircleHeroRef}>
                        <img ref={dropperRef} src="boxDrop.png" className="boxDropHome" alt="Dropper" />
                    </div>
                </div>
                <div className="spacerTester" ref={textRevealHomeRef}>
                    <div className="homeNameRevealMainDiv">
                        <h1 ref={textRevealTextRef} className="homeNameRevealMain">KAIZEN #10428</h1>
                    </div>
                </div>
                <div className="comingSoonText" ref={comingSoonRef} style={{ textAlign: 'start', fontSize: '2rem', opacity: 0 }}>
                    <span className="spanComingSoonText">Robot</span>
                    <span className="spanComingSoonText">Coming Soon</span>
                </div>

                <div ref={teamFormationDivRef} className="teamFormationDivHome">
                    <div className="wrapperTeamFormation" ref={wrapperImageRef}>
                        <img ref={teamFormationImageRef0} className="teamImageFixer teamImageM1" src="teamMember.webp" alt="Team Member 1" />
                        <img ref={teamFormationImageRef1} className="teamImageFixer teamImageM1L" src="teamMember.webp" alt="Team Member 2" />
                        <img ref={teamFormationImageRef2} className="teamImageFixer teamImageM1R" src="teamMember.webp" alt="Team Member 3" />
                        <img ref={teamFormationImageRef3} className="teamImageFixer teamImageM2R" src="teamMember.webp" alt="Team Member 4" />
                        <img ref={teamFormationImageRef4} className="teamImageFixer teamImageM2L" src="teamMember.webp" alt="Team Member 5" />
                    </div>
                    <h1 className="outlinerTeamHead" ref={teamFormationOurRef}>Our Story</h1>
                </div>

                <div className="spacer">s</div>

                {/* Render Zoom component if zoomData is set */}
                {zoomData && (
                    <Zoom
                        title={zoomData.title}
                        info={zoomData.description}
                        img={`carousel${zoomData.id}.${zoomData.type === 'video' ? 'mp4' : 'jpg'}`}
                        handleCloseZoom={handleCloseZoom}
                    />
                )}

                <div className="carouselStoryHolder">
                    <div className="carouselStories" ref={carouselStoriesRef}>
                        {dataCarousel.map((item) => (
                            <div
                                className="carouselImageContainer"
                                key={item.id}
                                onClick={() => handleZoom(item)}
                            >
                                {item.type === 'video' ? (
                                    <video className="carouselImage" autoPlay loop muted>
                                        <source src={`carousel${item.id}.mp4`} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img src={`carousel${item.id}.jpg`} className="carouselImage" alt={item.title} />
                                )}
                                <div className="carouselText">
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="missionMainHolder" ref={missionMainHolderRef}>
                    <div className="missionSecondaryHolder" ref={missionSecondaryHolderRef}>
                    <img src="dart.png" ref={dartImageRef} className="dartImage" alt="Dart" />
                    <div className="missionMoverMain">
                        <div className="textHolder">
                            <h1 className="missionTextHolderHome">Mission</h1>
                            <div className="missionMover" ref={mainMoverCauserRef}>
                                <h1 className="missionTextHolderHome missionTextHolderHome2">Mission</h1>
                            </div>
                        </div>
                        <div className="textWrapperMission">
                        <h3 className="mainTextInfoMission" ref={mainTextMissionRef}>To foster innovation, resilience, and collaboration among students, empowering them to tackle complex problems through robotics and technology. Through these efforts, we inspire interest in robotics among those who might not have had the opportunity, ensuring the next generation of changemakers is prepared to take the lead. We strive to cultivate an environment where learning goes beyond the classroom, instilling values of teamwork, integrity, and a commitment to making a positive impact on society.</h3>
                        </div>
                    </div>
                    <img src="dartboard.png" ref={dartBoardRef} className="dartBoardImage" alt="Dartboard" />
                    </div>
                </div>
                <div className="visionMainHolder" ref={eyeHolderVisionRef}>
                    <img className="visionEyeImg" ref={visionEyeImgRef} src="eyeBlue.png"/> 
                </div>
                <div className="visionInformationHolder">
                <h3 className="outlinerTeamHead outlinerTeamHead2" ref={mainHeadVisionRef}>Vision</h3>
                <p className="visitInformationPane">To be a leading force in the global robotics community by nurturing a culture of relentless innovation and unyielding strength. We envision our students as future changemakers who inspire and lead technological advancements in competitions and society at large. Through our efforts, we aspire to create a ripple effect of innovation and knowledge, transforming communities and driving the global push for technological progress.</p>
                </div>

                <div className="kaizenCarouselTextHolder">
                    <h1 className=" NothomeNameRevealMain">KAIZEN x JPIS</h1>
                    <h1 className=" NothomeNameRevealMain">KAIZEN x JPIS</h1>
                    <h1 className=" NothomeNameRevealMain">KAIZEN x JPIS</h1>
                </div>

                

                <div className="contactUsMainHolder" ref={contactRef}>
                    <div className="leftSideHolder">
                        
                    </div>
                    <div className="rightSideHolder">
                        <h1 className="contactUshead">Contact Us!</h1>
                        <div className="innerContactPane">
                            <div className="spaceMaker" style={{display: "flex", flexDirection: "column"}}>
                        <label className="labeller">Name:</label>
                        <input type="text" className="inputFields" placeholder=" Enter Name Here" value={name} onChange={(e)=> {
                            setName(e.target.value);
                        }}/>
                        </div>
                        <div className="spaceMaker" style={{display: "flex", flexDirection: "column"}}>
                        <label className="labeller">Email:</label>
                        <input type="email" className="inputFields" placeholder=" Enter Email Here" value={email} onChange={(e) => {
                            setEmail(e.target.value);
                        }}/>
                        </div>
                        <div className="spaceMaker" style={{display: "flex", flexDirection: "column"}}>
                        <label className="labeller">Phone Number:</label>
                        <input type="number" className="inputFields" placeholder=" Enter Phone With Code" value={phone} onChange={(e) => {
                            setPhone(e.target.value);
                        }}/>
                        </div>
                        <div className="spaceMaker" style={{display: "flex", flexDirection: "column"}}>
                        <label className="labeller">Additional Notes:</label>
                        <textarea type="text" className="inputFields inputAdd" placeholder=" Reason for Contact" value={notes} onChange={(e) => {
                            setNotes(e.target.value);
                        }}/>
                        </div>
                        
                        {isSubmitting ? <h1 className="loadSubmitting">Submitting...</h1> : <button className="inputFields" onClick={handleSubmit}>Submit</button>}
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="imageFooterLeft footerer">
                        <img className="footerLogo" src="frcLogo.png" />
                    </div>
                    <div className="socialsFooter footerer">
                        <h1>Follow Us On!</h1>
                        <div className="holderFootSocial" onClick={instaRedirect}><img className="footerContainerImg" src="instagram.png" /><ul>Instagram</ul></div>
                        <div className="holderFootSocial" onClick={youTubeRedirect}><img className="footerContainerImg" src="youtube.png" /><ul>YouTube</ul></div>
                        <div className="holderFootSocial" onClick={blogSpotRedirect}><img className="footerContainerImg" src="blogspot.png" /><ul>BlogSpot</ul></div>
                    </div>
                    <div className="linkPagefooter footerer">
                        <h1>Content</h1>
                        <div className="holderFootSocial" onClick={scrollToOurStory}><ul>Our Story</ul></div>
                        <div className="holderFootSocial" onClick={scrollToMission}><ul>Mission</ul></div>
                        <div className="holderFootSocial" onClick={scrollToVision}><ul>Vision</ul></div>
                    </div>
                </div>

                {isNavbarOpen && (
    <div onClick={closeNavbar}> {/* Clicking outside will close the navbar */}
        <Navbar 
            onClickOurStory={scrollToOurStory}
            onClickMission={scrollToMission}
            onClickVision={scrollToVision}
            onClickContactUs={scrollToContact}
        />
    </div>
)}

            </div>
        </div>
        </div>
    );
    
};

export default HomePage;
