import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="errorBodyBackHolder">
            <div className="errorCarryingContent">
            <h1 className="errorHead">404</h1>
            <h1 className="errorCarrying">Not Found</h1>
            <Link to="/home" className="hoverButtonError"><button className="buttonError" >Go Back to Home &#8617;</button></Link>
            </div>
        </div>
    )
}

export default NotFound;