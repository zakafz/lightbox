import React from "react";
import Overlay from "./components/overlay";
import Frame from "./components/frame";
import Image from "./components/image";


const Lightbox = ({
  title,
  src,
  isOverlayClickable = true,
  overlayClassName,
  theme = 'dark' 
}: {
  title: string;
  src: string;
  isOverlayClickable?: boolean;
  overlayClassName?: string;
  theme?: 'light' | 'dark';
}) => {

  return (
    <div className="aboslute z-50">
      <Overlay isClickable={isOverlayClickable} overlayClassname={overlayClassName} />
      <Frame title={title} theme={theme}>
        <Image src={src} />
      </Frame>
    </div> 
  );
};

export default Lightbox;