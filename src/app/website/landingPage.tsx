import React from "react";
import Lightbox from "../lightbox/lightbox";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-screen">
      <Lightbox
        title="8k Wallpaper Photos, Download The BEST Free 8k Wallpaper Stock Photos & HD Images"
        src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?cs=srgb&dl=pexels-eberhardgross-1624496.jpg&fm=jpg"
      >
        Open lightbox
      </Lightbox>
    </div>
  );
};

export default LandingPage;
