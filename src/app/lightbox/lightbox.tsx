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
}: {
  title: string;
  src: string;
  isOverlayClickable?: boolean;
  overlayClassName?: string;
  theme?: "light" | "dark";
  opacity?: number;
}) => {
  return (
    <div className="aboslute z-50">
      <Overlay
        isClickable={isOverlayClickable}
        overlayClassname={overlayClassName}
        opacity={opacity}
      />
      <Frame title={title} theme={theme}>
        <Image src={src} />
      </Frame>
    </div>
  );
};

export default Lightbox;
