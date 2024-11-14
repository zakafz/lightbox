import React from "react";
import Overlay from "./components/overlay";
import Frame from "./components/frame";
import Image from "./components/image";

const Lightbox = ({
  title,
  src,
  isOverlayClickable = true,
  overlayClassName,
  theme = "dark",
  opacity = 60,
  closeIconClassname,
}: {
  title: string;
  src: string;
  isOverlayClickable?: boolean;
  overlayClassName?: string;
  theme?: "light" | "dark";
  opacity?: number;
  closeIconClassname?: string;
}) => {
  return (
    <div className="absolute top-0 left-0 z-50 flex justify-center items-center h-screen max-h-screen w-screen max-w-screen">
      <Overlay
        isClickable={isOverlayClickable}
        overlayClassname={overlayClassName}
        opacity={opacity}
      />
      <Frame title={title} theme={theme} closeIconClassname={closeIconClassname}>
        <Image src={src} theme={theme} />
      </Frame>
    </div>
  );
};

export default Lightbox;
