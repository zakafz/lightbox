import React from "react";

const Overlay = (props: {
  isClickable?: boolean;
  opacity: number;
  overlayClassname?: string;
  setOpen: (state: boolean) => void
}) => {
  return (
    <div
      style={{ opacity: props.opacity / 100 }}
      onClick={() => props.setOpen(false)}
      className={`absolute z-0 top-0 left-0 w-screen h-screen min-w-screen min-h-screen bg-black ${props.overlayClassname}`}
    />
  );
};

export default Overlay