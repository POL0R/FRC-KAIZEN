import React from 'react';

const Zoom = ({ title, info, img, handleCloseZoom }) => {
    const isVideo = img.endsWith('.mp4'); // Check if it's a video

    return (
        <div className="frostyEffectBack" onClick={handleCloseZoom}>
            <div className="zoomMainHolder" onClick={(e) => e.stopPropagation()}>
                <div className="zoomMainLeftHolder">
                    <h1 className="headerTitle">{title}</h1>
                    <p className="bodyMainZoom">{info}</p>
                </div>
                <div 
                    className="zoomMainRightHolder"
                    style={{
                        backgroundImage: !isVideo ? `url(${img})` : 'none',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                >
                    {isVideo && (
                        <video className="zoomedVideo" autoPlay loop muted style={{position: "relative", width: '100%', top: "-50%"}}>
                            <source src={img} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Zoom;
