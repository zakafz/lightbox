import React from "react";

const Overlay = (props: { isClickable?: boolean; overlayClassname?: string }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-screen h-screen min-w-screen min-h-screen ${props.overlayClassname}`}
    />
  );
};

export default Overlay;