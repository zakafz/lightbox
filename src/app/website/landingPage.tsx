import React from "react";
import Lightbox from "../lightbox/lightbox";

const LandingPage = () => {
  return (
    <div className="bg-amber-400 min-h-screen w-screen">
      hello
      <Lightbox
        allowDrag={false}
        title="Platon"
        theme="dark"
        src="https://images.pexels.com/photos/302820/pexels-photo-302820.jpeg?cs=srgb&dl=pexels-pixabay-302820.jpg&fm=jpg"
      >
        Open lightbox
      </Lightbox>
    </div>
  );
};

export default LandingPage;
