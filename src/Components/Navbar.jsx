import React from "react";
const Navbar = ({ onClickOurStory, onClickMission, onClickVision, onClickContactUs }) => {
    return (
        <div className="mainMainerNavHolder">
            <div className="menuNavHolder">
                <div className="optionHolder">
                <h1 className="navbarMenuOptions" onClick={onClickOurStory}>Our Story</h1>
                <h1 className="navbarMenuOptions" onClick={onClickMission}>Mission</h1>
                <h1 className="navbarMenuOptions" onClick={onClickVision}>Vision</h1>
                <h1 className="navbarMenuOptions" onClick={onClickContactUs}>Contact Us</h1>

                </div>
                <div className="socialsNav">
                    <h3>Social Media Handles</h3>
                    <div className="socialMediaIcons">
                        <img src="youtube.png" alt="YouTube" className="socialIcon"/>
                        <img src="instagram.png" alt="Instagram" className="socialIcon"/>
                        <img src="blogspot.png" alt="Blogspot" className="socialIcon"/>
                    </div>
                </div>
            </div>
            {/* Frosty effect background */}
            <div className="frostyEffectBack frostyEffectBack2"></div>
        </div>
    );
}

export default Navbar;
