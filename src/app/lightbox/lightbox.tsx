"use client";
import React, { ReactNode, useState } from "react";
import Overlay from "./components/overlay";
import Frame from "./components/frame";
import Image from "./components/image";

const Lightbox = ({
  children,
  title,
  src,
  isOverlayClickable = true,
  overlayClassName,
  theme = "dark",
  opacity = 60,
  closeIconClassname,
}: {
  children: ReactNode;
  title: string;
  src: string;
  isOverlayClickable?: boolean;
  overlayClassName?: string;
  theme?: "light" | "dark";
  opacity?: number;
  closeIconClassname?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`absolute top-0 left-0 z-50 flex justify-center items-center h-screen max-h-screen w-screen max-w-screen ${
          open ? "" : "hidden"
        }`}
      >
        <Overlay
          isClickable={isOverlayClickable}
          overlayClassname={overlayClassName}
          opacity={opacity}
          setOpen={setOpen}
        />
        <Frame
          title={title}
          theme={theme}
          closeIconClassname={closeIconClassname}
          setOpen={setOpen}
        >
          <Image src={src} theme={theme} />
        </Frame>
      </div>
      <div onClick={() => setOpen(true)}>{children}</div>
    </>
  );
};

export default Lightbox;
