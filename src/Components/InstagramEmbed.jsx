import React, { useEffect } from 'react';

const InstagramEmbed = () => {
  useEffect(() => {
    // Dynamically load the Instagram embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <blockquote 
      className="instagram-media"
      data-instgrm-captioned 
      data-instgrm-permalink="https://www.instagram.com/p/DBEWFh_vAU4/?utm_source=ig_embed&utm_campaign=loading" 
      data-instgrm-version="14" 
      style={{ 
        background: '#000', 
        border: 0, 
        borderRadius: '3px', 
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', 
        margin: '1px', 
        maxWidth: '540px', 
        minWidth: '326px', 
        padding: 0, 
        width: 'calc(100% - 2px)' 
      }}
    >
      <div style={{ padding: '16px' }}>
        <a 
          href="https://www.instagram.com/p/DBEWFh_vAU4/?utm_source=ig_embed&utm_campaign=loading" 
          style={{ background: '#000', color: "white", lineHeight: 0, padding: 0, textAlign: 'center', textDecoration: 'none', width: '100%' }} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#000', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
              <div style={{ backgroundColor: '#000', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
              <div style={{ backgroundColor: '#000', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
            </div>
          </div>
          <div style={{ padding: '19% 0' }}></div>
          <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
            {/* Instagram logo SVG */}
            <svg width="50px" height="50px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                  <g>
                    {/* SVG Path */}
                    <path d="..."></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div style={{ paddingTop: '8px' }}>
            <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontWeight: '550', lineHeight: '18px' }}>
              View this post on Instagram
            </div>
          </div>
          <div style={{ padding: '12.5% 0' }}></div>
          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
            {/* More styling here */}
          </div>
        </a>
        <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          <a 
            href="https://www.instagram.com/p/DBEWFh_vAU4/?utm_source=ig_embed&utm_campaign=loading" 
            style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', textDecoration: 'none' }} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            A post shared by @frc.kaizen
          </a>
        </p>
      </div>
    </blockquote>
  );
};

export default InstagramEmbed;
