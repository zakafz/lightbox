import React from "react";

const Overlay = (props: {
  isClickable?: boolean;
  opacity: number;
  overlayClassname?: string;
}) => {
  return (
    <div
      style={{ opacity: props.opacity / 100 }}
      className={`absolute top-0 left-0 w-screen h-screen min-w-screen min-h-screen bg-black ${props.overlayClassname}`}
    />
  );
};

export default Overlay